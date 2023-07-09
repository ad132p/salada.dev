import {
  require_note
} from "/build/_shared/chunk-NWO4XCJO.js";
import {
  require_session
} from "/build/_shared/chunk-TA6WSWS5.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  Form,
  isRouteErrorResponse,
  require_jsx_dev_runtime,
  useLoaderData,
  useRouteError
} from "/build/_shared/chunk-KEZDWIBR.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/routes/notes.$noteId.jsx
var import_node = __toESM(require_node());
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NoteDetailsPage() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold", children: data.note.title }, void 0, false, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-6", children: data.note.body }, void 0, false, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "my-4" }, void 0, false, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Delete"
      },
      void 0,
      false,
      {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 42,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.$noteId.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  const error = useRouteError();
  if (error instanceof Error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      "An unexpected error occurred: ",
      error.message
    ] }, void 0, true, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 57,
      columnNumber: 12
    }, this);
  }
  if (!isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Unknown Error" }, void 0, false, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 61,
      columnNumber: 12
    }, this);
  }
  if (error.status === 404) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Note not found" }, void 0, false, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 65,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, true, {
    fileName: "app/routes/notes.$noteId.jsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  NoteDetailsPage as default
};
//# sourceMappingURL=/build/routes/notes.$noteId-HMTWNSTP.js.map
