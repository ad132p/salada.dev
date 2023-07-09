import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KEZDWIBR.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// empty-module:~/server/auth.server
var require_auth = __commonJS({
  "empty-module:~/server/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.jsx
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [{ title: "salada.dev" }];
function Index() {
  const user = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "relative min-h-screen bg-[#27272a] sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-white drop-shadow-md", children: "salada.dev" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 21,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 20,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: "/notes",
          className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-yellow-50 sm:px-8",
          children: [
            "View Notes for ",
            user.email
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 28,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 27,
        columnNumber: 19
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:gap-5 sm:space-y-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: "/login",
          className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8",
          children: "Login"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 37,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 36,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 25,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 max-w-7xl text-center" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 50,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-FREMC74P.js.map
