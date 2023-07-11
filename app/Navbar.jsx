import React from "react";
import home from "./images/home.png"
import { Link, Form, useRouteLoaderData } from "@remix-run/react";

export default function Navbar() {
    const user = useRouteLoaderData('routes/_index');

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-1 py-1 bg-emerald-500 mb-1">
                <div className="container px-1 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-between">
                        <a href="/"><img className="mr-4 py-2" src={home} width="50" height="50" alt="casinha"></img></a>
                    </div>

                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-between">
                        <a
                            className="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
                            href="/"
                        >
                            salada.dev
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:mr-auto">
                            <li className="nav-item">
                                <Link
                                    to="/posts"
                                    className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                                >
                                    <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">blog</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <Form method="post" action="/logout" className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75">
                                            <button><span className="ml-2">logout</span></button>
                                        </Form>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                                            href="/login"
                                        >
                                            <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">login</span>
                                        </a>
                                    </li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
