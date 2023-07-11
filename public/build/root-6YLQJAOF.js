import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  require_jsx_dev_runtime,
  require_react,
  useRouteLoaderData
} from "/build/_shared/chunk-KEZDWIBR.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// css-bundle-update-plugin-ns:/barra_projetos/salada.dev/salada.dev/node_modules/@remix-run/css-bundle/dist/esm/index.js
var cssBundleHref = false ? void 0 : void 0;

// app/Navbar.jsx
var import_react = __toESM(require_react());

// app/images/home.png
var home_default = "/build/_assets/home-6KNKTAZA.png";

// app/Navbar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Navbar() {
  const user = useRouteLoaderData("routes/_index");
  const [navbarOpen, setNavbarOpen] = import_react.default.useState(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "relative flex flex-wrap items-center justify-between px-1 py-1 bg-emerald-500 mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container px-1 mx-auto flex flex-wrap items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "mr-4 py-2", src: home_default, width: "50", height: "50", alt: "casinha" }, void 0, false, {
      fileName: "app/Navbar.jsx",
      lineNumber: 14,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "app/Navbar.jsx",
      lineNumber: 14,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/Navbar.jsx",
      lineNumber: 13,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "a",
        {
          className: "text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white",
          href: "/",
          children: "salada.dev"
        },
        void 0,
        false,
        {
          fileName: "app/Navbar.jsx",
          lineNumber: 18,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
          type: "button",
          onClick: () => setNavbarOpen(!navbarOpen),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-bars" }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 29,
            columnNumber: 29
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/Navbar.jsx",
          lineNumber: 24,
          columnNumber: 25
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/Navbar.jsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden"),
        id: "example-navbar-danger",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col lg:flex-row list-none lg:mr-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: "/posts",
              className: "px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "text-lg leading-lg text-white opacity-75" }, void 0, false, {
                  fileName: "app/Navbar.jsx",
                  lineNumber: 45,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: "blog" }, void 0, false, {
                  fileName: "app/Navbar.jsx",
                  lineNumber: 45,
                  columnNumber: 97
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/Navbar.jsx",
              lineNumber: 41,
              columnNumber: 33
            },
            this
          ) }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 40,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 39,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col lg:flex-row list-none lg:ml-auto", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", className: "px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: "logout" }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 54,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 54,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 53,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 52,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 51,
            columnNumber: 33
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              className: "px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75",
              href: "/login",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "text-lg leading-lg text-white opacity-75" }, void 0, false, {
                  fileName: "app/Navbar.jsx",
                  lineNumber: 65,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: "login" }, void 0, false, {
                  fileName: "app/Navbar.jsx",
                  lineNumber: 65,
                  columnNumber: 105
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/Navbar.jsx",
              lineNumber: 61,
              columnNumber: 41
            },
            this
          ) }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 60,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 59,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/Navbar.jsx",
            lineNumber: 49,
            columnNumber: 25
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/Navbar.jsx",
        lineNumber: 32,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/Navbar.jsx",
    lineNumber: 12,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/Navbar.jsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/Navbar.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-23VMBACG.css";

// app/root.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full bg-[#27272a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
/*! Bundled license information:

@remix-run/css-bundle/dist/esm/index.js:
  (**
   * @remix-run/css-bundle v1.18.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=/build/root-6YLQJAOF.js.map
