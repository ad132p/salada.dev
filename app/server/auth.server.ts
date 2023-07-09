// app/server/auth.server.ts
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { GoogleStrategy, FacebookStrategy, SocialsProvider } from "remix-auth-socials";
import { sessionStorage } from "../services/session.server";
import { getUserByEmail, verifyLogin } from "../models/user.server";
import invariant from "tiny-invariant";

// Create an instance of the authenticator
export let authenticator = new Authenticator<User | Error | null>(sessionStorage, { sessionKey: 'sessionKey', sessionErrorKey: "sessionErrorKey" });
// You may specify a <User> type which the strategies will return (this will be stored in the session)
// export let authenticator = new Authenticator<User>(sessionStorage, { sessionKey: '_session' });

const getCallback = (provider: SocialsProvider) => {
    return `http://localhost:3000/auth/${provider}/callback`
}


authenticator.use(
    new FormStrategy(async ({ form }) => {
        let email = form.get("email");
        let password = form.get("password");


        invariant(typeof email === "string", "username must be a string");
        invariant(email.length > 0, "email must not be empty");

        invariant(typeof password === "string", "password must be a string");
        invariant(password.length > 0, "password must not be empty");

        let user = await verifyLogin(email, password);
        if (!user) {
            console.log('aqui')
            throw new AuthorizationError("User does not exist")
        }

        // the type of this user must match the type you pass to the Authenticator
        // the strategy will automatically inherit the type if you instantiate
        // directly inside the `use` method
        return user;
    }),
    // each strategy has a name and can be changed to use another one
    // same strategy multiple times, especially useful for the OAuth2 strategy.
    "form"
);

authenticator.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_OAUTH2_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
        callbackURL: getCallback(SocialsProvider.GOOGLE)
    },
    async ({ profile }) => {
        const email = profile.emails[0].value
        const user = getUserByEmail(email)
        console.log(user)
        return user;
    }
));

//authenticator.use(new FacebookStrategy(
//    {
//        clientID: "YOUR_CLIENT_ID",
//        clientSecret: "YOUR_CLIENT_SECRET",
//        callbackURL: getCallback(SocialsProvider.FACEBOOK)
//    },
//    async ({ profile }) => { }
//));

export type User = {
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
};