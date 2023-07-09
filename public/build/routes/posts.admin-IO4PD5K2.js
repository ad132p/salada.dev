import {
  require_post
} from "/build/_shared/chunk-SG4GLWT6.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  Link,
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KEZDWIBR.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/routes/posts.admin.tsx
var import_node = __toESM(require_node());
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostAdmin() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "my-6 mb-2 border-b-2 text-center text-3xl", children: "Blog Admin" }, void 0, false, {
      fileName: "app/routes/posts.admin.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "col-span-4 md:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: post.slug,
          className: "text-blue-600 underline",
          children: post.title
        },
        void 0,
        false,
        {
          fileName: "app/routes/posts.admin.tsx",
          lineNumber: 22,
          columnNumber: 33
        },
        this
      ) }, post.slug, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 21,
        columnNumber: 29
      }, this)) }, void 0, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "col-span-4 md:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.admin.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.admin.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}
export {
  PostAdmin as default
};
//# sourceMappingURL=/build/routes/posts.admin-IO4PD5K2.js.map
