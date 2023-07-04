import { ActionArgs } from "@remix-run/node"

import { authenticator } from "../server/auth.server";


export let action = async ({ request }: ActionArgs) => {
    return await authenticator.logout(request, { redirectTo: "/" });
};
