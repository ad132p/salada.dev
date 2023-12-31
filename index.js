const fs = require("fs");
const { createServer } = require("http");

const { WebSocketServer } = require('ws');
const WebSocket = require('ws');
const websocketStream = require('websocket-stream');

const { parse } = require('url');
const path = require("path");

const { createRequestHandler } = require("@remix-run/express");
const compression = require("compression");
const express = require("express");
const morgan = require("morgan");

const { broadcastDevReady } = require("@remix-run/node");

const MODE = process.env.NODE_ENV;
const BUILD_DIR = path.join(process.cwd(), "build");
const build = require(BUILD_DIR);

const email = require('./api/email');


if (!fs.existsSync(BUILD_DIR)) {
  console.warn(
    "Build directory doesn't exist, please run `npm run dev` or `npm run build` before starting the server.",
  );
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(compression());

// You may want to be more aggressive with this caching
app.use(express.static("public", { maxAge: "1h" }));

// Remix fingerprints its assets so we can cache forever
app.use(express.static("public/build", { immutable: true, maxAge: "1y" }));

app.use(morgan("tiny"));

// Email route

app.post('/api/email/order-confirmation', async (req, res, next) => {
  try {
    res.json(await email.sendOrderConfirmation(req.body));
  } catch (err) {
    next(err);
  }
});

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


// Create the HTTP server from the Express app
const httpServer = createServer(app);


////////////////////////////////////////
//WS


const wss = new WebSocketServer({ noServer: true, perMessageDeflate: false });


wss.on('connection', (ws) => {
  console.log('Client connected');

  var stream = websocketStream(ws);
  var source = fs.createReadStream('api/audio_test.wav');
  source.pipe(stream);

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  //ws.send('something');
});


////////////////////////////////////////


httpServer.on('upgrade', function upgrade(request, socket, head) {
  const { pathname } = parse(request.url);

  if (pathname === '/api/michaelstream') {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
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