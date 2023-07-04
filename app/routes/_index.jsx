import { Link, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/server/auth.server";


export async function loader({ request }) {
  // If the user is already authenticated redirect to /dashboard directly
  return await authenticator.isAuthenticated(request);
};

export const meta = () => [{ title: "salada.dev" }];

export default function Index() {
  const user = useLoaderData();
  return (
    <>
      <main className="relative min-h-screen bg-[#27272a] sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block text-white drop-shadow-md">
                  salada.dev
                </span>
              </h1>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <>
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                    >
                      View Notes for {user.email}
                    </Link>
                  </>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:gap-5 sm:space-y-0">
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>

          </div>

          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-7xl text-center">
            </div>
          </div>
        </div>
      </main >
    </>
  );
}
