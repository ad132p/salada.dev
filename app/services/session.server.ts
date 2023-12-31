import { createCookieSessionStorage, redirect } from "@remix-run/node";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "_session", // use any name you want here
        sameSite: "lax", // this helps with CSRF
        path: "/", // remember to add this so the cookie will work in all routes
        httpOnly: true, // for security reasons, make this cookie http only
        secrets: [ process.env.SESSION_SECRET ], // replace this with an actual secret
        //secure: process.env.NODE_ENV === "production", // enable this in prod only
    },
});



//async function getSession(request: Request) {
//    const cookie = request.headers.get("Cookie");
//    return sessionStorage.getSession(cookie);
//}


export async function logout(request: Request) {
    const session = await getSession(request);
    return redirect("/", {
        headers: {
            "Set-Cookie": await sessionStorage.destroySession(session),
        },
    });
}


// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;