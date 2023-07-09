import {
  require_post
} from "/build/_shared/chunk-SG4GLWT6.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KEZDWIBR.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/routes/posts._index.jsx
var import_node = __toESM(require_node());
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Posts() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Posts" }, void 0, false, {
      fileName: "app/routes/posts._index.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "admin", className: "text-red-600 underline", children: "Admin" }, void 0, false, {
      fileName: "app/routes/posts._index.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: post.slug,
        className: "text-blue-600 underline",
        children: post.title
      },
      void 0,
      false,
      {
        fileName: "app/routes/posts._index.jsx",
        lineNumber: 20,
        columnNumber: 25
      },
      this
    ) }, post.slug, false, {
      fileName: "app/routes/posts._index.jsx",
      lineNumber: 19,
      columnNumber: 21
    }, this)) }, void 0, false, {
      fileName: "app/routes/posts._index.jsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts._index.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts._index-SECDN5BI.js.map
