import {
  require_post
} from "/build/_shared/chunk-SG4GLWT6.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  Form,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-KEZDWIBR.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/routes/posts.admin.new.tsx
var import_node = __toESM(require_node());
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;
function NewPost() {
  const errors = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
      "Post Title:",
      " ",
      (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: errors.title }, void 0, false, {
        fileName: "app/routes/posts.admin.new.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          name: "title",
          className: inputClassName
        },
        void 0,
        false,
        {
          fileName: "app/routes/posts.admin.new.tsx",
          lineNumber: 58,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/posts.admin.new.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.admin.new.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
      "Post Slug:",
      " ",
      (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: errors.slug }, void 0, false, {
        fileName: "app/routes/posts.admin.new.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          name: "slug",
          className: inputClassName
        },
        void 0,
        false,
        {
          fileName: "app/routes/posts.admin.new.tsx",
          lineNumber: 71,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/posts.admin.new.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.admin.new.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "markdown", children: [
        "Markdown:",
        " ",
        (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: errors.markdown }, void 0, false, {
          fileName: "app/routes/posts.admin.new.tsx",
          lineNumber: 82,
          columnNumber: 25
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/posts.admin.new.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/posts.admin.new.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "textarea",
        {
          id: "markdown",
          rows: 20,
          name: "markdown",
          className: `${inputClassName} font-mono`
        },
        void 0,
        false,
        {
          fileName: "app/routes/posts.admin.new.tsx",
          lineNumber: 88,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/posts.admin.new.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
        children: "Create Post"
      },
      void 0,
      false,
      {
        fileName: "app/routes/posts.admin.new.tsx",
        lineNumber: 96,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/posts.admin.new.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.admin.new.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this);
}
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/posts.admin.new-4RMNJOPN.js.map
