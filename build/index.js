var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value), __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// css-bundle-update-plugin-ns:/barra_projetos/salada.dev/salada.dev/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/barra_projetos/salada.dev/salada.dev/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist());

// app/Navbar.jsx
var import_react2 = __toESM(require("react"));

// app/images/home.png
var home_default = "/build/_assets/home-6KNKTAZA.png";

// app/Navbar.jsx
var import_react3 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function Navbar() {
  let user = (0, import_react3.useRouteLoaderData)("routes/_index"), [navbarOpen, setNavbarOpen] = import_react2.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: "relative flex flex-wrap items-center justify-between px-1 py-1 bg-mygreen mb-1", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "container px-1 mx-auto flex flex-wrap items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { className: "mr-4 py-2", src: home_default, width: "50", height: "50", alt: "casinha" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "a",
        {
          className: "text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white",
          href: "/",
          children: "salada.dev"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          className: "text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
          type: "button",
          onClick: () => setNavbarOpen(!navbarOpen),
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("i", { className: "fas fa-bars" })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        className: "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden"),
        id: "example-navbar-danger",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "flex flex-col lg:flex-row list-none lg:mr-auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            import_react3.Link,
            {
              to: "/posts",
              className: "px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("i", { className: "text-lg leading-lg text-white opacity-75" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ml-2", children: "blog" })
              ]
            }
          ) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "flex flex-col lg:flex-row list-none lg:ml-auto", children: user ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Form, { method: "post", action: "/logout", className: "px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ml-2", children: "logout" }) }) }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "a",
            {
              className: "px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75",
              href: "/login",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("i", { className: "text-lg leading-lg text-white opacity-75" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ml-2", children: "login" })
              ]
            }
          ) }) }) })
        ]
      }
    )
  ] }) }) });
}

// app/root.jsx
var import_react5 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-UQJUQ7IT.css";

// app/root.jsx
var import_react6 = require("react"), import_socket = require("socket.io-client"), import_socket2 = __toESM(require("socket.io-client"));

// app/context.jsx
var import_react4 = require("react"), import_jsx_runtime3 = require("react/jsx-runtime"), context = (0, import_react4.createContext)(void 0);
function useSocket() {
  return (0, import_react4.useContext)(context);
}
function SocketProvider({ socket, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(context.Provider, { value: socket, children });
}

// app/root.jsx
var import_jsx_runtime4 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  let [socket, setSocket] = (0, import_react6.useState)();
  return (0, import_react6.useEffect)(() => {
    let socket2 = (0, import_socket2.default)("http://localhost:8080", {
      path: "/michael-stream/"
    });
    return setSocket(socket2), () => {
      socket2.close();
    };
  }, []), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { className: "h-full bg-myice", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Navbar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SocketProvider, { socket, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Outlet, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.LiveReload, {})
    ] })
  ] });
}

// app/routes/auth.$provider.callback.tsx
var auth_provider_callback_exports = {};
__export(auth_provider_callback_exports, {
  loader: () => loader
});

// app/server/auth.server.ts
var import_remix_auth = require("remix-auth"), import_remix_auth_form = require("remix-auth-form"), import_remix_auth_socials = require("remix-auth-socials");

// app/services/session.server.ts
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    // use any name you want here
    sameSite: "lax",
    // this helps with CSRF
    path: "/",
    // remember to add this so the cookie will work in all routes
    httpOnly: !0,
    // for security reasons, make this cookie http only
    secrets: [process.env.SESSION_SECRET]
    // replace this with an actual secret
    //secure: process.env.NODE_ENV === "production", // enable this in prod only
  }
});
var { getSession, commitSession, destroySession } = sessionStorage;

// app/models/user.server.js
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.js
var import_client = require("@prisma/client"), prisma;
prisma = new import_client.PrismaClient();

// app/models/user.server.js
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/server/auth.server.ts
var import_tiny_invariant = __toESM(require("tiny-invariant")), authenticator = new import_remix_auth.Authenticator(sessionStorage, { sessionKey: "sessionKey", sessionErrorKey: "sessionErrorKey" }), getCallback = (provider) => {
  let host = process.env.DEPLOY_HOSTNAME, port = process.env.DEPLOY_PORT;
  return `${host}:${port}/auth/${provider}/callback`;
};
authenticator.use(
  new import_remix_auth_form.FormStrategy(async ({ form }) => {
    let email = form.get("email"), password = form.get("password");
    (0, import_tiny_invariant.default)(typeof email == "string", "username must be a string"), (0, import_tiny_invariant.default)(email.length > 0, "email must not be empty"), (0, import_tiny_invariant.default)(typeof password == "string", "password must be a string"), (0, import_tiny_invariant.default)(password.length > 0, "password must not be empty");
    let user = await verifyLogin(email, password);
    if (!user)
      throw console.log("aqui"), new import_remix_auth.AuthorizationError("User does not exist");
    return user;
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "form"
);
authenticator.use(new import_remix_auth_socials.GoogleStrategy(
  {
    clientID: process.env.GOOGLE_OAUTH2_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
    callbackURL: getCallback(import_remix_auth_socials.SocialsProvider.GOOGLE)
  },
  async ({ profile }) => {
    let email = profile.emails[0].value, user = getUserByEmail(email);
    return console.log(user), user;
  }
));

// app/routes/auth.$provider.callback.tsx
var loader = ({ request, params }) => authenticator.authenticate(params.provider, request, {
  successRedirect: "/",
  failureRedirect: "/login"
});

// app/routes/posts.admin._index.tsx
var posts_admin_index_exports = {};
__export(posts_admin_index_exports, {
  default: () => AdminIndex
});
var import_react7 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime");
function AdminIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react7.Link, { to: "new", className: "text-blue-600 underline", children: "Create a New Post" }) });
}

// app/routes/miguelTaNanando.jsx
var miguelTaNanando_exports = {};
__export(miguelTaNanando_exports, {
  default: () => MiguelTaNanando
});
var import_react8 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function MiguelTaNanando() {
  let socket = useSocket();
  return (0, import_react8.useEffect)(() => {
    socket && (socket.on("event", (data) => {
      console.log(data);
    }), socket.emit("event", "ping"));
  }, [socket]), /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { children: "Welcome to Remix + Socket.io" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", onClick: () => socket == null ? void 0 : socket.emit("event", "ping"), children: "Send ping" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "See Browser console and Server terminal" })
  ] });
}

// app/routes/posts.admin.new.tsx
var posts_admin_new_exports = {};
__export(posts_admin_new_exports, {
  action: () => action,
  default: () => NewPost
});
var import_react9 = require("@remix-run/react"), import_node3 = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/post.server.ts
async function getPosts() {
  return prisma.post.findMany();
}
async function getPost(slug) {
  return prisma.post.findFirst({ where: { slug } });
}
async function createPost(post) {
  return prisma.post.create({ data: post });
}

// app/routes/posts.admin.new.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), action = async ({ request }) => {
  let formData = await request.formData(), title = formData.get("title"), slug = formData.get("slug"), markdown = formData.get("markdown"), errors = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required"
  };
  return Object.values(errors).some(
    (errorMessage) => errorMessage
  ) ? (0, import_node3.json)(errors) : ((0, import_tiny_invariant2.default)(
    typeof title == "string",
    "title must be a string"
  ), (0, import_tiny_invariant2.default)(
    typeof slug == "string",
    "slug must be a string"
  ), (0, import_tiny_invariant2.default)(
    typeof markdown == "string",
    "markdown must be a string"
  ), await createPost({ title, slug, markdown }), (0, import_node3.redirect)("/posts/admin"));
}, inputClassName = "w-full rounded border border-gray-500 px-2 py-1 text-lg";
function NewPost() {
  let errors = (0, import_react9.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react9.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { children: [
      "Post Title:",
      " ",
      errors != null && errors.title ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("em", { className: "text-red-600", children: errors.title }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "input",
        {
          type: "text",
          name: "title",
          className: inputClassName
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { children: [
      "Post Slug:",
      " ",
      errors != null && errors.slug ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("em", { className: "text-red-600", children: errors.slug }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "input",
        {
          type: "text",
          name: "slug",
          className: inputClassName
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: "markdown", children: [
        "Markdown:",
        " ",
        errors != null && errors.markdown ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("em", { className: "text-red-600", children: errors.markdown }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "textarea",
        {
          id: "markdown",
          rows: 20,
          name: "markdown",
          className: `${inputClassName} font-mono`
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
        children: "Create Post"
      }
    ) })
  ] });
}

// app/routes/auth.$provider.tsx
var auth_provider_exports = {};
__export(auth_provider_exports, {
  action: () => action2,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
var loader2 = () => (0, import_node4.redirect)("/login"), action2 = ({ request, params }) => authenticator.authenticate(params.provider, request);

// app/routes/notes.$noteId.jsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action3,
  default: () => NoteDetailsPage,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_tiny_invariant4 = __toESM(require("tiny-invariant"));

// app/models/note.server.js
function getNote({ id, userId }) {
  return prisma.note.findFirst({
    select: { id: !0, body: !0, title: !0 },
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({ body, title, userId }) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({ id, userId }) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// app/session.server.js
var import_node5 = require("@remix-run/node"), import_tiny_invariant3 = __toESM(require("tiny-invariant"));
(0, import_tiny_invariant3.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage2 = (0, import_node5.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !0
  }
}), USER_SESSION_KEY = "userId";
async function getSession2(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage2.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession2(request)).get(USER_SESSION_KEY);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node5.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession2(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node5.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage2.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}

// app/routes/notes.$noteId.jsx
var import_jsx_runtime8 = require("react/jsx-runtime"), loader3 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant4.default)(params.noteId, "noteId not found");
  let note = await getNote({ id: params.noteId, userId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node6.json)({ note });
}, action3 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant4.default)(params.noteId, "noteId not found"), await deleteNote({ id: params.noteId, userId }), (0, import_node6.redirect)("/notes");
};
function NoteDetailsPage() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-2xl font-bold", children: data.note.title }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "py-6", children: data.note.body }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("hr", { className: "my-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react10.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Delete"
      }
    ) })
  ] });
}
function ErrorBoundary() {
  let error = (0, import_react10.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }) : (0, import_react10.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: "Note not found" }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { children: "Unknown Error" });
}

// app/routes/boloAdrielly.jsx
var boloAdrielly_exports = {};
__export(boloAdrielly_exports, {
  default: () => BoloAdrielly
});

// app/images/bolo.jpeg
var bolo_default = "/build/_assets/bolo-ATXS5NIG.jpeg";

// app/routes/boloAdrielly.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function BoloAdrielly() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: bolo_default, width: "600", height: "auto" }) }) });
}

// app/routes/notes._index.jsx
var notes_index_exports = {};
__export(notes_index_exports, {
  default: () => NoteIndexPage
});
var import_react11 = require("@remix-run/react"), import_jsx_runtime10 = require("react/jsx-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react11.Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." })
  ] });
}

// app/routes/posts._index.jsx
var posts_index_exports = {};
__export(posts_index_exports, {
  default: () => Posts,
  loader: () => loader4
});
var import_node7 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_jsx_runtime11 = require("react/jsx-runtime"), loader4 = async () => (0, import_node7.json)({ posts: await getPosts() });
function Posts() {
  let { posts } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { className: "border-green-200 border-4", children: "Posts" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react12.Link, { to: "admin", className: "text-red-600 underline", children: "Admin" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_react12.Link,
      {
        to: post.slug,
        className: "text-blue-600 underline",
        children: post.title
      }
    ) }, post.slug)) })
  ] });
}

// app/routes/healthcheck.jsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader5
});
var loader5 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/posts.$slug.tsx
var posts_slug_exports = {};
__export(posts_slug_exports, {
  default: () => PostSlug,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// node_modules/marked/lib/marked.esm.js
function getDefaults() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1
  };
}
var defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
var escapeTest = /[&<>"']/, escapeReplace = new RegExp(escapeTest.source, "g"), escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g"), escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html))
      return html.replace(escapeReplace, getEscapeReplacement);
  } else if (escapeTestNoEncode.test(html))
    return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex == "string" ? regex : regex.source, opt = opt || "";
  let obj = {
    replace: (name, val) => (val = val.source || val, val = val.replace(caret, "$1"), regex = regex.replace(name, val), obj),
    getRegex: () => new RegExp(regex, opt)
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g, originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0)
      return null;
  }
  base && !originIndependentUrl.test(href) && (href = resolveUrl(base, href));
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return href;
}
var baseUrls = {}, justDomain = /^[^:]+:\/*[^/]*$/, protocol = /^([^:]+:)[\s\S]*$/, domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  baseUrls[" " + base] || (justDomain.test(base) ? baseUrls[" " + base] = base + "/" : baseUrls[" " + base] = rtrim(base, "/", !0)), base = baseUrls[" " + base];
  let relativeBase = base.indexOf(":") === -1;
  return href.substring(0, 2) === "//" ? relativeBase ? href : base.replace(protocol, "$1") + href : href.charAt(0) === "/" ? relativeBase ? href : base.replace(domain, "$1") + href : base + href;
}
var noopTest = { exec: function() {
} };
function splitCells(tableRow, count) {
  let row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = !1, curr = offset;
    for (; --curr >= 0 && str[curr] === "\\"; )
      escaped = !escaped;
    return escaped ? "|" : " |";
  }), cells = row.split(/ \|/), i = 0;
  if (cells[0].trim() || cells.shift(), cells.length > 0 && !cells[cells.length - 1].trim() && cells.pop(), cells.length > count)
    cells.splice(count);
  else
    for (; cells.length < count; )
      cells.push("");
  for (; i < cells.length; i++)
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  return cells;
}
function rtrim(str, c, invert) {
  let l = str.length;
  if (l === 0)
    return "";
  let suffLen = 0;
  for (; suffLen < l; ) {
    let currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert)
      suffLen++;
    else if (currChar !== c && invert)
      suffLen++;
    else
      break;
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1)
    return -1;
  let l = str.length, level = 0, i = 0;
  for (; i < l; i++)
    if (str[i] === "\\")
      i++;
    else if (str[i] === b[0])
      level++;
    else if (str[i] === b[1] && (level--, level < 0))
      return i;
  return -1;
}
function checkDeprecations(opt, callback) {
  !opt || opt.silent || (callback && console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"), (opt.sanitize || opt.sanitizer) && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"), (opt.highlight || opt.langPrefix !== "language-") && console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."), opt.mangle && console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."), opt.baseUrl && console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."), opt.smartypants && console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."), opt.xhtml && console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."), (opt.headerIds || opt.headerPrefix) && console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."));
}
function outputLink(cap, link, raw, lexer2) {
  let href = link.href, title = link.title ? escape(link.title) : null, text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = !0;
    let token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    return lexer2.state.inLink = !1, token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  let matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null)
    return text;
  let indentToCode = matchIndentToCode[1];
  return text.split(`
`).map((node) => {
    let matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null)
      return node;
    let [indentInNode] = matchIndentInNode;
    return indentInNode.length >= indentToCode.length ? node.slice(indentToCode.length) : node;
  }).join(`
`);
}
var Tokenizer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  space(src) {
    let cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0)
      return {
        type: "space",
        raw: cap[0]
      };
  }
  code(src) {
    let cap = this.rules.block.code.exec(src);
    if (cap) {
      let text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? text : rtrim(text, `
`)
      };
    }
  }
  fences(src) {
    let cap = this.rules.block.fences.exec(src);
    if (cap) {
      let raw = cap[0], text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    let cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        let trimmed = rtrim(text, "#");
        (this.options.pedantic || !trimmed || / $/.test(trimmed)) && (text = trimmed.trim());
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    let cap = this.rules.block.hr.exec(src);
    if (cap)
      return {
        type: "hr",
        raw: cap[0]
      };
  }
  blockquote(src) {
    let cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let text = cap[0].replace(/^ *>[ \t]?/gm, ""), top = this.lexer.state.top;
      this.lexer.state.top = !0;
      let tokens = this.lexer.blockTokens(text);
      return this.lexer.state.top = top, {
        type: "blockquote",
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly, bull = cap[1].trim(), isordered = bull.length > 1, list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`, this.options.pedantic && (bull = isordered ? bull : "[*+-]");
      let itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; src && (endEarly = !1, !(!(cap = itemRegex.exec(src)) || this.rules.block.hr.test(src))); ) {
        if (raw = cap[0], src = src.substring(raw.length), line = cap[2].split(`
`, 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length)), nextLine = src.split(`
`, 1)[0], this.options.pedantic ? (indent = 2, itemContents = line.trimLeft()) : (indent = cap[2].search(/[^ ]/), indent = indent > 4 ? 1 : indent, itemContents = line.slice(indent), indent += cap[1].length), blankLine = !1, !line && /^ *$/.test(nextLine) && (raw += nextLine + `
`, src = src.substring(nextLine.length + 1), endEarly = !0), !endEarly) {
          let nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          for (; src && (rawLine = src.split(`
`, 1)[0], nextLine = rawLine, this.options.pedantic && (nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(fencesBeginRegex.test(nextLine) || headingBeginRegex.test(nextLine) || nextBulletRegex.test(nextLine) || hrRegex.test(src))); ) {
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim())
              itemContents += `
` + nextLine.slice(indent);
            else {
              if (blankLine || line.search(/[^ ]/) >= 4 || fencesBeginRegex.test(line) || headingBeginRegex.test(line) || hrRegex.test(line))
                break;
              itemContents += `
` + nextLine;
            }
            !blankLine && !nextLine.trim() && (blankLine = !0), raw += rawLine + `
`, src = src.substring(rawLine.length + 1), line = nextLine.slice(indent);
          }
        }
        list.loose || (endsWithBlankLine ? list.loose = !0 : /\n *\n *$/.test(raw) && (endsWithBlankLine = !0)), this.options.gfm && (istask = /^\[[ xX]\] /.exec(itemContents), istask && (ischecked = istask[0] !== "[ ] ", itemContents = itemContents.replace(/^\[[ xX]\] +/, ""))), list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: !1,
          text: itemContents
        }), list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight(), list.items[list.items.length - 1].text = itemContents.trimRight(), list.raw = list.raw.trimRight();
      let l = list.items.length;
      for (i = 0; i < l; i++)
        if (this.lexer.state.top = !1, list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []), !list.loose) {
          let spacers = list.items[i].tokens.filter((t) => t.type === "space"), hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list.loose = hasMultipleLineBreaks;
        }
      if (list.loose)
        for (i = 0; i < l; i++)
          list.items[i].loose = !0;
      return list;
    }
  }
  html(src) {
    let cap = this.rules.block.html.exec(src);
    if (cap) {
      let token = {
        type: "html",
        block: !0,
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        let text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = "paragraph", token.text = text, token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }
  def(src) {
    let cap = this.rules.block.def.exec(src);
    if (cap) {
      let tag = cap[1].toLowerCase().replace(/\s+/g, " "), href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
      return {
        type: "def",
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    let cap = this.rules.block.table.exec(src);
    if (cap) {
      let item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => ({ text: c })),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length, i, j, k, row;
        for (i = 0; i < l; i++)
          /^ *-+: *$/.test(item.align[i]) ? item.align[i] = "right" : /^ *:-+: *$/.test(item.align[i]) ? item.align[i] = "center" : /^ *:-+ *$/.test(item.align[i]) ? item.align[i] = "left" : item.align[i] = null;
        for (l = item.rows.length, i = 0; i < l; i++)
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => ({ text: c }));
        for (l = item.header.length, j = 0; j < l; j++)
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        for (l = item.rows.length, j = 0; j < l; j++)
          for (row = item.rows[j], k = 0; k < row.length; k++)
            row[k].tokens = this.lexer.inline(row[k].text);
        return item;
      }
    }
  }
  lheading(src) {
    let cap = this.rules.block.lheading.exec(src);
    if (cap)
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
  }
  paragraph(src) {
    let cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      let text = cap[1].charAt(cap[1].length - 1) === `
` ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    let cap = this.rules.block.text.exec(src);
    if (cap)
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
  }
  escape(src) {
    let cap = this.rules.inline.escape.exec(src);
    if (cap)
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
  }
  tag(src) {
    let cap = this.rules.inline.tag.exec(src);
    if (cap)
      return !this.lexer.state.inLink && /^<a /i.test(cap[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(cap[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
  }
  link(src) {
    let cap = this.rules.inline.link.exec(src);
    if (cap) {
      let trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl))
          return;
        let rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0)
          return;
      } else {
        let lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          let linkLen = (cap[0].indexOf("!") === 0 ? 5 : 4) + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex), cap[0] = cap[0].substring(0, linkLen).trim(), cap[3] = "";
        }
      }
      let href = cap[2], title = "";
      if (this.options.pedantic) {
        let link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        link && (href = link[1], title = link[3]);
      } else
        title = cap[3] ? cap[3].slice(1, -1) : "";
      return href = href.trim(), /^</.test(href) && (this.options.pedantic && !/>$/.test(trimmedUrl) ? href = href.slice(1) : href = href.slice(1, -1)), outputLink(cap, {
        href: href && href.replace(this.rules.inline._escapes, "$1"),
        title: title && title.replace(this.rules.inline._escapes, "$1")
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links2) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      if (link = links2[link.toLowerCase()], !link) {
        let text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match || match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    if (!(match[1] || match[2] || "") || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      let lLength = match[0].length - 1, rDelim, rLength, delimTotal = lLength, midDelimTotal = 0, endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (endReg.lastIndex = 0, maskedSrc = maskedSrc.slice(-1 * src.length + lLength); (match = endReg.exec(maskedSrc)) != null; ) {
        if (rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6], !rDelim)
          continue;
        if (rLength = rDelim.length, match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if ((match[5] || match[6]) && lLength % 3 && !((lLength + rLength) % 3)) {
          midDelimTotal += rLength;
          continue;
        }
        if (delimTotal -= rLength, delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        let raw = src.slice(0, lLength + match.index + rLength + 1);
        if (Math.min(lLength, rLength) % 2) {
          let text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        let text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    let cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " "), hasNonSpaceChars = /[^ ]/.test(text), hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      return hasNonSpaceChars && hasSpaceCharsOnBothEnds && (text = text.substring(1, text.length - 1)), text = escape(text, !0), {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    let cap = this.rules.inline.br.exec(src);
    if (cap)
      return {
        type: "br",
        raw: cap[0]
      };
  }
  del(src) {
    let cap = this.rules.inline.del.exec(src);
    if (cap)
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
  }
  autolink(src, mangle2) {
    let cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      return cap[2] === "@" ? (text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]), href = "mailto:" + text) : (text = escape(cap[1]), href = text), {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@")
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]), href = "mailto:" + text;
      else {
        let prevCapZero;
        do
          prevCapZero = cap[0], cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        while (prevCapZero !== cap[0]);
        text = escape(cap[0]), cap[1] === "www." ? href = "http://" + cap[0] : href = cap[0];
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    let cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      return this.lexer.state.inRawBlock ? text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0] : text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]), {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}, block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.lheading = edit(block.lheading).replace(/bull/g, block.bullet).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = { ...block };
block.gfm = {
  ...block.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
};
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = {
  ...block.normal,
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};
inline._punctuation = "\\p{P}$+<=>`^|~";
inline.punctuation = edit(inline.punctuation, "u").replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
inline.anyPunctuation = /\\[punct]/g;
inline._escapes = /\\([punct])/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim, "u").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline.anyPunctuation = edit(inline.anyPunctuation, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = edit(inline._escapes, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = { ...inline };
inline.pedantic = {
  ...inline.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
};
inline.gfm = {
  ...inline.normal,
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = {
  ...inline.gfm,
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i, ch, l = text.length;
  for (i = 0; i < l; i++)
    ch = text.charCodeAt(i), Math.random() > 0.5 && (ch = "x" + ch.toString(16)), out += "&#" + ch + ";";
  return out;
}
var Lexer = class {
  constructor(options2) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = options2 || defaults, this.options.tokenizer = this.options.tokenizer || new Tokenizer(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    let rules = {
      block: block.normal,
      inline: inline.normal
    };
    this.options.pedantic ? (rules.block = block.pedantic, rules.inline = inline.pedantic) : this.options.gfm && (rules.block = block.gfm, this.options.breaks ? rules.inline = inline.breaks : rules.inline = inline.gfm), this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    return new Lexer(options2).lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    return new Lexer(options2).inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, `
`), this.blockTokens(src, this.tokens);
    let next;
    for (; next = this.inlineQueue.shift(); )
      this.inlineTokens(next.src, next.tokens);
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    this.options.pedantic ? src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "") : src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => leading + "    ".repeat(tabs.length));
    let token, lastToken, cutSrc, lastParagraphClipped;
    for (; src; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => (token = extTokenizer.call({ lexer: this }, src, tokens)) ? (src = src.substring(token.raw.length), tokens.push(token), !0) : !1))) {
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length), token.raw.length === 1 && tokens.length > 0 ? tokens[tokens.length - 1].raw += `
` : tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && (lastToken.type === "paragraph" || lastToken.type === "text") ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.text, this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text) : tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && (lastToken.type === "paragraph" || lastToken.type === "text") ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.raw, this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text) : this.tokens.links[token.tag] || (this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          });
          continue;
        }
        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (cutSrc = src, this.options.extensions && this.options.extensions.startBlock) {
          let startIndex = 1 / 0, tempSrc = src.slice(1), tempStart;
          this.options.extensions.startBlock.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc), typeof tempStart == "number" && tempStart >= 0 && (startIndex = Math.min(startIndex, tempStart));
          }), startIndex < 1 / 0 && startIndex >= 0 && (cutSrc = src.substring(0, startIndex + 1));
        }
        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1], lastParagraphClipped && lastToken.type === "paragraph" ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text) : tokens.push(token), lastParagraphClipped = cutSrc.length !== src.length, src = src.substring(token.raw.length);
          continue;
        }
        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && lastToken.type === "text" ? (lastToken.raw += `
` + token.raw, lastToken.text += `
` + token.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text) : tokens.push(token);
          continue;
        }
        if (src) {
          let errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else
            throw new Error(errMsg);
        }
      }
    return this.state.top = !0, tokens;
  }
  inline(src, tokens = []) {
    return this.inlineQueue.push({ src, tokens }), tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc, maskedSrc = src, match, keepPrevChar, prevChar;
    if (this.tokens.links) {
      let links2 = Object.keys(this.tokens.links);
      if (links2.length > 0)
        for (; (match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null; )
          links2.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1)) && (maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null; )
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null; )
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; src; )
      if (keepPrevChar || (prevChar = ""), keepPrevChar = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => (token = extTokenizer.call({ lexer: this }, src, tokens)) ? (src = src.substring(token.raw.length), tokens.push(token), !0) : !1))) {
        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && token.type === "text" && lastToken.type === "text" ? (lastToken.raw += token.raw, lastToken.text += token.text) : tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length), lastToken = tokens[tokens.length - 1], lastToken && token.type === "text" && lastToken.type === "text" ? (lastToken.raw += token.raw, lastToken.text += token.text) : tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length), tokens.push(token);
          continue;
        }
        if (cutSrc = src, this.options.extensions && this.options.extensions.startInline) {
          let startIndex = 1 / 0, tempSrc = src.slice(1), tempStart;
          this.options.extensions.startInline.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc), typeof tempStart == "number" && tempStart >= 0 && (startIndex = Math.min(startIndex, tempStart));
          }), startIndex < 1 / 0 && startIndex >= 0 && (cutSrc = src.substring(0, startIndex + 1));
        }
        if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
          src = src.substring(token.raw.length), token.raw.slice(-1) !== "_" && (prevChar = token.raw.slice(-1)), keepPrevChar = !0, lastToken = tokens[tokens.length - 1], lastToken && lastToken.type === "text" ? (lastToken.raw += token.raw, lastToken.text += token.text) : tokens.push(token);
          continue;
        }
        if (src) {
          let errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else
            throw new Error(errMsg);
        }
      }
    return tokens;
  }
}, Renderer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  code(code, infostring, escaped) {
    let lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      let out = this.options.highlight(code, lang);
      out != null && out !== code && (escaped = !0, code = out);
    }
    return code = code.replace(/\n$/, "") + `
`, lang ? '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? code : escape(code, !0)) + `</code></pre>
` : "<pre><code>" + (escaped ? code : escape(code, !0)) + `</code></pre>
`;
  }
  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html, block2) {
    return html;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      let id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(body, ordered, start) {
    let type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + `>
` + body + "</" + type + `>
`;
  }
  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    return body && (body = `<tbody>${body}</tbody>`), `<table>
<thead>
` + header + `</thead>
` + body + `</table>
`;
  }
  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    let type = flags.header ? "th" : "td";
    return (flags.align ? `<${type} align="${flags.align}">` : `<${type}>`) + content + `</${type}>
`;
  }
  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    if (href = cleanUrl(this.options.sanitize, this.options.baseUrl, href), href === null)
      return text;
    let out = '<a href="' + href + '"';
    return title && (out += ' title="' + title + '"'), out += ">" + text + "</a>", out;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    if (href = cleanUrl(this.options.sanitize, this.options.baseUrl, href), href === null)
      return text;
    let out = `<img src="${href}" alt="${text}"`;
    return title && (out += ` title="${title}"`), out += this.options.xhtml ? "/>" : ">", out;
  }
  text(text) {
    return text;
  }
}, TextRenderer = class {
  // no need for block level renderers
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
}, Slugger = class {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug, occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do
        occurenceAccumulator++, slug = originalSlug + "-" + occurenceAccumulator;
      while (this.seen.hasOwnProperty(slug));
    }
    return isDryRun || (this.seen[originalSlug] = occurenceAccumulator, this.seen[slug] = 0), slug;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options2 = {}) {
    let slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options2.dryrun);
  }
}, Parser = class {
  constructor(options2) {
    this.options = options2 || defaults, this.options.renderer = this.options.renderer || new Renderer(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new TextRenderer(), this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    return new Parser(options2).parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    return new Parser(options2).parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = !0) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret, l = tokens.length;
    for (i = 0; i < l; i++) {
      if (token = tokens[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type] && (ret = this.options.extensions.renderers[token.type].call({ parser: this }, token), ret !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type))) {
        out += ret || "";
        continue;
      }
      switch (token.type) {
        case "space":
          continue;
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          out += this.renderer.code(
            token.text,
            token.lang,
            token.escaped
          );
          continue;
        }
        case "table": {
          for (header = "", cell = "", l2 = token.header.length, j = 0; j < l2; j++)
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: !0, align: token.align[j] }
            );
          for (header += this.renderer.tablerow(cell), body = "", l2 = token.rows.length, j = 0; j < l2; j++) {
            for (row = token.rows[j], cell = "", l3 = row.length, k = 0; k < l3; k++)
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: !1, align: token.align[k] }
              );
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens), out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          for (ordered = token.ordered, start = token.start, loose = token.loose, l2 = token.items.length, body = "", j = 0; j < l2; j++)
            item = token.items[j], checked = item.checked, task = item.task, itemBody = "", item.task && (checkbox = this.renderer.checkbox(checked), loose ? item.tokens.length > 0 && item.tokens[0].type === "paragraph" ? (item.tokens[0].text = checkbox + " " + item.tokens[0].text, item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text" && (item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text)) : item.tokens.unshift({
              type: "text",
              text: checkbox
            }) : itemBody += checkbox), itemBody += this.parse(item.tokens, loose), body += this.renderer.listitem(itemBody, task, checked);
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text, token.block);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          for (body = token.tokens ? this.parseInline(token.tokens) : token.text; i + 1 < l && tokens[i + 1].type === "text"; )
            token = tokens[++i], body += `
` + (token.tokens ? this.parseInline(token.tokens) : token.text);
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          let errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else
            throw new Error(errMsg);
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret, l = tokens.length;
    for (i = 0; i < l; i++) {
      if (token = tokens[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type] && (ret = this.options.extensions.renderers[token.type].call({ parser: this }, token), ret !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type))) {
        out += ret || "";
        continue;
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          let errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else
            throw new Error(errMsg);
        }
      }
    }
    return out;
  }
}, Hooks = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html) {
    return html;
  }
};
__publicField(Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess"
]));
var _parseMarkdown, parseMarkdown_fn, _onError, onError_fn, Marked = class {
  constructor(...args) {
    __privateAdd(this, _parseMarkdown);
    __privateAdd(this, _onError);
    __publicField(this, "defaults", getDefaults());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", __privateMethod(this, _parseMarkdown, parseMarkdown_fn).call(this, Lexer.lex, Parser.parse));
    __publicField(this, "parseInline", __privateMethod(this, _parseMarkdown, parseMarkdown_fn).call(this, Lexer.lexInline, Parser.parseInline));
    __publicField(this, "Parser", Parser);
    __publicField(this, "parser", Parser.parse);
    __publicField(this, "Renderer", Renderer);
    __publicField(this, "TextRenderer", TextRenderer);
    __publicField(this, "Lexer", Lexer);
    __publicField(this, "lexer", Lexer.lex);
    __publicField(this, "Tokenizer", Tokenizer);
    __publicField(this, "Slugger", Slugger);
    __publicField(this, "Hooks", Hooks);
    this.use(...args);
  }
  walkTokens(tokens, callback) {
    let values = [];
    for (let token of tokens)
      switch (values = values.concat(callback.call(this, token)), token.type) {
        case "table": {
          for (let cell of token.header)
            values = values.concat(this.walkTokens(cell.tokens, callback));
          for (let row of token.rows)
            for (let cell of row)
              values = values.concat(this.walkTokens(cell.tokens, callback));
          break;
        }
        case "list": {
          values = values.concat(this.walkTokens(token.items, callback));
          break;
        }
        default:
          this.defaults.extensions && this.defaults.extensions.childTokens && this.defaults.extensions.childTokens[token.type] ? this.defaults.extensions.childTokens[token.type].forEach((childTokens) => {
            values = values.concat(this.walkTokens(token[childTokens], callback));
          }) : token.tokens && (values = values.concat(this.walkTokens(token.tokens, callback)));
      }
    return values;
  }
  use(...args) {
    let extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return args.forEach((pack) => {
      let opts = { ...pack };
      if (opts.async = this.defaults.async || opts.async || !1, pack.extensions && (pack.extensions.forEach((ext) => {
        if (!ext.name)
          throw new Error("extension name required");
        if (ext.renderer) {
          let prevRenderer = extensions.renderers[ext.name];
          prevRenderer ? extensions.renderers[ext.name] = function(...args2) {
            let ret = ext.renderer.apply(this, args2);
            return ret === !1 && (ret = prevRenderer.apply(this, args2)), ret;
          } : extensions.renderers[ext.name] = ext.renderer;
        }
        if (ext.tokenizer) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          extensions[ext.level] ? extensions[ext.level].unshift(ext.tokenizer) : extensions[ext.level] = [ext.tokenizer], ext.start && (ext.level === "block" ? extensions.startBlock ? extensions.startBlock.push(ext.start) : extensions.startBlock = [ext.start] : ext.level === "inline" && (extensions.startInline ? extensions.startInline.push(ext.start) : extensions.startInline = [ext.start]));
        }
        ext.childTokens && (extensions.childTokens[ext.name] = ext.childTokens);
      }), opts.extensions = extensions), pack.renderer) {
        let renderer = this.defaults.renderer || new Renderer(this.defaults);
        for (let prop in pack.renderer) {
          let prevRenderer = renderer[prop];
          renderer[prop] = (...args2) => {
            let ret = pack.renderer[prop].apply(renderer, args2);
            return ret === !1 && (ret = prevRenderer.apply(renderer, args2)), ret;
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        let tokenizer = this.defaults.tokenizer || new Tokenizer(this.defaults);
        for (let prop in pack.tokenizer) {
          let prevTokenizer = tokenizer[prop];
          tokenizer[prop] = (...args2) => {
            let ret = pack.tokenizer[prop].apply(tokenizer, args2);
            return ret === !1 && (ret = prevTokenizer.apply(tokenizer, args2)), ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        let hooks = this.defaults.hooks || new Hooks();
        for (let prop in pack.hooks) {
          let prevHook = hooks[prop];
          Hooks.passThroughHooks.has(prop) ? hooks[prop] = (arg) => {
            if (this.defaults.async)
              return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then((ret2) => prevHook.call(hooks, ret2));
            let ret = pack.hooks[prop].call(hooks, arg);
            return prevHook.call(hooks, ret);
          } : hooks[prop] = (...args2) => {
            let ret = pack.hooks[prop].apply(hooks, args2);
            return ret === !1 && (ret = prevHook.apply(hooks, args2)), ret;
          };
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        let walkTokens2 = this.defaults.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          return values.push(pack.walkTokens.call(this, token)), walkTokens2 && (values = values.concat(walkTokens2.call(this, token))), values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    }), this;
  }
  setOptions(opt) {
    return this.defaults = { ...this.defaults, ...opt }, this;
  }
};
_parseMarkdown = new WeakSet(), parseMarkdown_fn = function(lexer2, parser2) {
  return (src, opt, callback) => {
    typeof opt == "function" && (callback = opt, opt = null);
    let origOpt = { ...opt };
    opt = { ...this.defaults, ...origOpt };
    let throwError = __privateMethod(this, _onError, onError_fn).call(this, opt.silent, opt.async, callback);
    if (typeof src > "u" || src === null)
      return throwError(new Error("marked(): input parameter is undefined or null"));
    if (typeof src != "string")
      return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
    if (checkDeprecations(opt, callback), opt.hooks && (opt.hooks.options = opt), callback) {
      let highlight = opt.highlight, tokens;
      try {
        opt.hooks && (src = opt.hooks.preprocess(src)), tokens = lexer2(src, opt);
      } catch (e) {
        return throwError(e);
      }
      let done = (err) => {
        let out;
        if (!err)
          try {
            opt.walkTokens && this.walkTokens(tokens, opt.walkTokens), out = parser2(tokens, opt), opt.hooks && (out = opt.hooks.postprocess(out));
          } catch (e) {
            err = e;
          }
        return opt.highlight = highlight, err ? throwError(err) : callback(null, out);
      };
      if (!highlight || highlight.length < 3 || (delete opt.highlight, !tokens.length))
        return done();
      let pending = 0;
      this.walkTokens(tokens, (token) => {
        token.type === "code" && (pending++, setTimeout(() => {
          highlight(token.text, token.lang, (err, code) => {
            if (err)
              return done(err);
            code != null && code !== token.text && (token.text = code, token.escaped = !0), pending--, pending === 0 && done();
          });
        }, 0));
      }), pending === 0 && done();
      return;
    }
    if (opt.async)
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html) => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
    try {
      opt.hooks && (src = opt.hooks.preprocess(src));
      let tokens = lexer2(src, opt);
      opt.walkTokens && this.walkTokens(tokens, opt.walkTokens);
      let html = parser2(tokens, opt);
      return opt.hooks && (html = opt.hooks.postprocess(html)), html;
    } catch (e) {
      return throwError(e);
    }
  };
}, _onError = new WeakSet(), onError_fn = function(silent, async, callback) {
  return (e) => {
    if (e.message += `
Please report this to https://github.com/markedjs/this.`, silent) {
      let msg = "<p>An error occurred:</p><pre>" + escape(e.message + "", !0) + "</pre>";
      if (async)
        return Promise.resolve(msg);
      if (callback) {
        callback(null, msg);
        return;
      }
      return msg;
    }
    if (async)
      return Promise.reject(e);
    if (callback) {
      callback(e);
      return;
    }
    throw e;
  };
};
var markedInstance = new Marked(defaults);
function marked(src, opt, callback) {
  return markedInstance.parse(src, opt, callback);
}
marked.options = marked.setOptions = function(opt) {
  return markedInstance.setOptions(opt), marked.defaults = markedInstance.defaults, changeDefaults(marked.defaults), marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function(...args) {
  return markedInstance.use(...args), marked.defaults = markedInstance.defaults, changeDefaults(marked.defaults), marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.Hooks = Hooks;
marked.parse = marked;
var options = marked.options, setOptions = marked.setOptions, use = marked.use, walkTokens = marked.walkTokens, parseInline = marked.parseInline;
var parser = Parser.parse, lexer = Lexer.lex;

// app/routes/posts.$slug.tsx
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_jsx_runtime12 = require("react/jsx-runtime"), loader6 = async ({ params }) => {
  (0, import_tiny_invariant5.default)(params.slug, "params.slug is required");
  let post = await getPost(params.slug);
  (0, import_tiny_invariant5.default)(post, `Post not found: ${params.slug}`);
  let html = marked(post.markdown);
  return (0, import_node8.json)({ html, post });
};
function PostSlug() {
  let { html, post } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("main", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "my-6 border-b-2 text-center text-3xl", children: post.title }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { dangerouslySetInnerHTML: { __html: html } })
  ] });
}

// app/routes/posts.admin.tsx
var posts_admin_exports = {};
__export(posts_admin_exports, {
  default: () => PostAdmin,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
var import_jsx_runtime13 = require("react/jsx-runtime"), loader7 = async () => (0, import_node9.json)({ posts: await getPosts() });
function PostAdmin() {
  let { posts } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { className: "my-6 mb-2 border-b-2 text-center text-3xl", children: "Blog Admin" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("nav", { className: "col-span-4 md:col-span-1", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ul", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_react14.Link,
        {
          to: post.slug,
          className: "text-blue-600 underline",
          children: post.title
        }
      ) }, post.slug)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("main", { className: "col-span-4 md:col-span-3", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react14.Outlet, {}) })
    ] })
  ] });
}

// app/routes/notes.new.jsx
var notes_new_exports = {};
__export(notes_new_exports, {
  action: () => action4,
  default: () => NewNotePage
});
var import_node10 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react16 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime"), action4 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node10.json)(
      { errors: { body: null, title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node10.json)(
      { errors: { body: "Body is required", title: null } },
      { status: 400 }
    );
  let note = await createNote({ body, title, userId });
  return (0, import_node10.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react15.useActionData)(), titleRef = (0, import_react16.useRef)(null), bodyRef = (0, import_react16.useRef)(null);
  return (0, import_react16.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_react15.Form,
    {
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "Title: " }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              "input",
              {
                ref: titleRef,
                name: "title",
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
              }
            )
          ] }),
          (_c = actionData == null ? void 0 : actionData.errors) != null && _c.title ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "Body: " }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                rows: 8,
                className: "w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6",
                "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? !0 : void 0,
                "aria-errormessage": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.body ? "body-error" : void 0
              }
            )
          ] }),
          (_f = actionData == null ? void 0 : actionData.errors) != null && _f.body ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          }
        ) })
      ]
    }
  );
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader8,
  meta: () => meta
});
var import_react17 = require("@remix-run/react");
var import_jsx_runtime15 = require("react/jsx-runtime");
async function loader8({ request }) {
  return await authenticator.isAuthenticated(request);
}
var meta = () => [{ title: "salada.dev" }];
function Index() {
  let user = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("main", { className: "relative min-h-screen sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "relative sm:pb-16 sm:pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "block text-[#1f271b] drop-shadow-md", children: "salada.dev" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
        import_react17.Link,
        {
          to: "/notes",
          className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-yellow-50 sm:px-8",
          children: [
            "View Notes for ",
            user.email
          ]
        }
      ) }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:gap-5 sm:space-y-0", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_react17.Link,
        {
          to: "/login",
          className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8",
          children: "Login"
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mx-auto mt-16 max-w-7xl text-center" }) })
  ] }) }) });
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action5
});
var action5 = async ({ request }) => await authenticator.logout(request, { redirectTo: "/" });

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => LoginPage,
  loader: () => loader9,
  meta: () => meta2
});
var import_node11 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_react19 = require("react");
var import_remix_auth_socials2 = require("remix-auth-socials"), import_jsx_runtime16 = require("react/jsx-runtime"), SocialButton = ({ provider, label }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react18.Form, { action: `/auth/${provider}`, method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("button", { className: "bg-slate-100 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150", children: [
  label,
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { className: "w-6 h-6", src: "https://www.svgrepo.com/show/475656/google-color.svg", loading: "lazy", alt: "google logo" })
] }) });
async function action6({ request, context: context2 }) {
  let resp = await authenticator.authenticate("form", request, {
    successRedirect: "/",
    failureRedirect: "/login",
    throwOnError: !0,
    context: context2
  });
  return console.log(resp, "resp"), resp;
}
var loader9 = async ({ request }) => {
  await authenticator.isAuthenticated(request, { successRedirect: "/" });
  let error = (await sessionStorage2.getSession(
    request.headers.get("Cookie")
  )).get("sessionErrorKey");
  return (0, import_node11.json)({ error });
}, meta2 = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react18.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react18.useActionData)(), emailRef = (0, import_react19.useRef)(null), passwordRef = (0, import_react19.useRef)(null), loaderData = (0, import_react18.useLoaderData)();
  console.log(JSON.stringify(loaderData));
  let [isPasswordVisible, setIsPasswordVisible] = (0, import_react19.useState)(!1);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mx-auto w-full max-w-md px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react18.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-100",
            children: "Email address"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "input",
            {
              ref: emailRef,
              id: "email",
              required: !0,
              autoFocus: !0,
              name: "email",
              type: "email",
              autoComplete: "email",
              "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
              "aria-describedby": "email-error",
              className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
            }
          ),
          (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }) : null
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-100",
            children: "Password"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "relative container mx-auto mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "input",
            {
              id: "password",
              ref: passwordRef,
              name: "password",
              type: isPasswordVisible ? "text" : "password",
              autoComplete: "current-password",
              "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
              "aria-describedby": "password-error",
              className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "span",
            {
              className: "absolute inset-y-0 right-0 flex items-center px-4 text-gray-600",
              onClick: togglePasswordVisibility,
              children: isPasswordVisible ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  className: "w-5 h-5",
                  children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    }
                  )
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  className: "w-5 h-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      }
                    )
                  ]
                }
              )
            }
          )
        ] }),
        (_d = loaderData == null ? void 0 : loaderData.error) != null && _d.message ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "pt-1 text-red-700", id: "password-error", children: loaderData.error.message }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "button",
        {
          className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
          children: "Log in"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-50",
            children: "Remember me"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SocialButton, { provider: import_remix_auth_socials2.SocialsProvider.GOOGLE, label: "Login with Google" }),
      " "
    ] })
  ] }) });
}

// app/routes/notes.jsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader10
});
var import_node12 = require("@remix-run/node"), import_react22 = require("@remix-run/react");

// app/utils.js
var import_react20 = require("@remix-run/react"), import_react21 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react20.useMatches)(), route = (0, import_react21.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/notes.jsx
var import_jsx_runtime17 = require("react/jsx-runtime"), loader10 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node12.json)({ noteListItems });
};
function NotesPage() {
  let data = (0, import_react22.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react22.Link, { to: ".", children: "Notes" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: user.email }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react22.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600",
          children: "Logout"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react22.Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("hr", {}),
        data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "p-4", children: "No notes yet" }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          import_react22.NavLink,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          }
        ) }, note.id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react22.Outlet, {}) })
    ] })
  ] });
}

// app/routes/join.jsx
var join_exports = {};
__export(join_exports, {
  action: () => action7,
  default: () => Join,
  loader: () => loader11,
  meta: () => meta3
});
var import_node13 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_react24 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime"), loader11 = async ({ request }) => await getUserId(request) ? (0, import_node13.redirect)("/") : (0, import_node13.json)({}), action7 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node13.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node13.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node13.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node13.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta3 = () => [{ title: "Sign Up" }];
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react23.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react23.useActionData)(), emailRef = (0, import_react24.useRef)(null), passwordRef = (0, import_react24.useRef)(null);
  return (0, import_react24.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react23.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        import_react23.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        }
      )
    ] }) })
  ] }) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7P3LSARM.js", imports: ["/build/_shared/chunk-POENIYAD.js", "/build/_shared/chunk-EY2ZLVYG.js", "/build/_shared/chunk-XDMRC4Q6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UU5UHZPV.js", imports: ["/build/_shared/chunk-NBVJHI3X.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3SMM5OAC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$provider": { id: "routes/auth.$provider", parentId: "root", path: "auth/:provider", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$provider-RVR4P2HZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$provider.callback": { id: "routes/auth.$provider.callback", parentId: "routes/auth.$provider", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$provider.callback-UDJTSOVG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/boloAdrielly": { id: "routes/boloAdrielly", parentId: "root", path: "boloAdrielly", index: void 0, caseSensitive: void 0, module: "/build/routes/boloAdrielly-WBP2THX2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-KOU5IKV6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-TKPVWKZG.js", imports: ["/build/_shared/chunk-BWZ6V6MV.js", "/build/_shared/chunk-67HWOM7P.js", "/build/_shared/chunk-JW4P2HUS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-32OCP7GY.js", imports: ["/build/_shared/chunk-JW4P2HUS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-LNGECIUC.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/miguelTaNanando": { id: "routes/miguelTaNanando", parentId: "root", path: "miguelTaNanando", index: void 0, caseSensitive: void 0, module: "/build/routes/miguelTaNanando-X3O3NCOK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-UCYI53KR.js", imports: ["/build/_shared/chunk-BWZ6V6MV.js", "/build/_shared/chunk-5XSQXV56.js", "/build/_shared/chunk-67HWOM7P.js", "/build/_shared/chunk-JW4P2HUS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-NMKLT32H.js", imports: ["/build/_shared/chunk-URNZPFSF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-T6YWQ3WX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-EAF4H6JC.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$slug": { id: "routes/posts.$slug", parentId: "root", path: "posts/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$slug-SDCDD6AL.js", imports: ["/build/_shared/chunk-F2G3CKIP.js", "/build/_shared/chunk-URNZPFSF.js", "/build/_shared/chunk-JW4P2HUS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts._index": { id: "routes/posts._index", parentId: "root", path: "posts", index: !0, caseSensitive: void 0, module: "/build/routes/posts._index-RVMGPJMI.js", imports: ["/build/_shared/chunk-F2G3CKIP.js", "/build/_shared/chunk-JW4P2HUS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.admin": { id: "routes/posts.admin", parentId: "root", path: "posts/admin", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.admin-CLLCUN36.js", imports: ["/build/_shared/chunk-F2G3CKIP.js", "/build/_shared/chunk-JW4P2HUS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.admin._index": { id: "routes/posts.admin._index", parentId: "routes/posts.admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts.admin._index-OA4T63DR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.admin.new": { id: "routes/posts.admin.new", parentId: "routes/posts.admin", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.admin.new-MI3QJTF7.js", imports: ["/build/_shared/chunk-URNZPFSF.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "7c87ee38", hmr: void 0, url: "/build/manifest-7C87EE38.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth.$provider.callback": {
    id: "routes/auth.$provider.callback",
    parentId: "routes/auth.$provider",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: auth_provider_callback_exports
  },
  "routes/posts.admin._index": {
    id: "routes/posts.admin._index",
    parentId: "routes/posts.admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: posts_admin_index_exports
  },
  "routes/miguelTaNanando": {
    id: "routes/miguelTaNanando",
    parentId: "root",
    path: "miguelTaNanando",
    index: void 0,
    caseSensitive: void 0,
    module: miguelTaNanando_exports
  },
  "routes/posts.admin.new": {
    id: "routes/posts.admin.new",
    parentId: "routes/posts.admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: posts_admin_new_exports
  },
  "routes/auth.$provider": {
    id: "routes/auth.$provider",
    parentId: "root",
    path: "auth/:provider",
    index: void 0,
    caseSensitive: void 0,
    module: auth_provider_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/boloAdrielly": {
    id: "routes/boloAdrielly",
    parentId: "root",
    path: "boloAdrielly",
    index: void 0,
    caseSensitive: void 0,
    module: boloAdrielly_exports
  },
  "routes/notes._index": {
    id: "routes/notes._index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_index_exports
  },
  "routes/posts._index": {
    id: "routes/posts._index",
    parentId: "root",
    path: "posts",
    index: !0,
    caseSensitive: void 0,
    module: posts_index_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/posts.$slug": {
    id: "routes/posts.$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: posts_slug_exports
  },
  "routes/posts.admin": {
    id: "routes/posts.admin",
    parentId: "root",
    path: "posts/admin",
    index: void 0,
    caseSensitive: void 0,
    module: posts_admin_exports
  },
  "routes/notes.new": {
    id: "routes/notes.new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: notes_new_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
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
