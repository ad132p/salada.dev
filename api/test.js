const WebSocket = require('ws');
const { createWebSocketStream } = require('ws');
const { createReadStream, createWriteStream } = require("fs"); 

const ws = new WebSocket('ws://localhost:8080/api/michaelstream');

const duplex = createWebSocketStream(ws, { encoding: 'utf8' });
//const duplex = createWebSocketStream(ws, { binary: true });
const writeStream = createWriteStream("./audio.wav")

duplex.on('error', console.error);

duplex.pipe(writeStream);
