import { cssBundleHref } from "@remix-run/css-bundle";
import Navbar from "./Navbar";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";


import { useEffect, useState } from "react";
import io from "socket.io-client";

import { SocketProvider } from "~/context";


export const links = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];


export default function App() {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = io('http://localhost:8080', { 
      path: "/michael-stream/"
    });
    setSocket(socket);
    return () => {
      socket.close();
    };
  }, []);

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-myice">
        <Navbar />
        <SocketProvider socket={socket}>
          <Outlet />
        </SocketProvider>

        {/***        <Outlet /> ****/}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
