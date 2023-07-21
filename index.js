const fs = require("fs");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");

const { createRequestHandler } = require("@remix-run/express");
const compression = require("compression");
const express = require("express");
const morgan = require("morgan");

const { broadcastDevReady } = require("@remix-run/node");

const MODE = process.env.NODE_ENV;
const BUILD_DIR = path.join(process.cwd(), "build");
const build = require(BUILD_DIR);
const cors = require('cors');

if (!fs.existsSync(BUILD_DIR)) {
  console.warn(
    "Build directory doesn't exist, please run `npm run dev` or `npm run build` before starting the server.",
  );
}

const app = express();


app.use(compression());

// You may want to be more aggressive with this caching
app.use(express.static("public", { maxAge: "1h" }));

// Remix fingerprints its assets so we can cache forever
app.use(express.static("public/build", { immutable: true, maxAge: "1y" }));

app.use(morgan("tiny"));
app.all(
  "*",
  MODE === "production"
    ? createRequestHandler({ build })
    : (req, res, next) => {
      purgeRequireCache();
      return createRequestHandler({ build, mode: MODE })(req, res, next);
    },
);

const port = process.env.PORT || 8080;


// You need to create the HTTP server from the Express app
const httpServer = createServer(app);

// And then attach the socket.io server to the HTTP server
const io = new Server(httpServer,
  {
    path: "/michael-stream/",
    cors: {
      origin: 'http://localhost:8080',
      methods: ["GET", "POST"]
    }
  }
);

// Then you can use `io` to listen the `connection` event and get a socket
// from a client
io.on("connection", (socket) => {
  // from this point you are on the WS connection with a specific client
  console.log(socket.id, "connected");

  socket.emit("confirmation", "connected!");

  socket.on("event", (data) => {
    console.log(socket.id, data);
    socket.emit("event", "pong");
  });
});



// instead of running listen on the Express app, do it on the HTTP server
httpServer.listen(port, () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
  console.log(`Express server listening on port ${port}`);
});

////////////////////////////////////////////////////////////////////////////////
function purgeRequireCache() {
  // purge require cache on requests for "server side HMR" this won't let
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, we prefer the DX of this though, so we've included it
  // for you by default
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}
