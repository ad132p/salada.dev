const portAudio = require('naudiodon');
const cp = require('child_process')
const WebSocket = require('ws');
const { createWebSocketStream } = require('ws');
const { createReadStream, createWriteStream } = require("fs");

function createWav() {

	// Create an instance of AudioIO with inOptions (defaults are as below), which will return a ReadableStream
	var ai = new portAudio.AudioIO({
		inOptions: {
			channelCount: 2,
			sampleFormat: portAudio.SampleFormat16Bit,
			sampleRate: 44100,
			deviceId: -1, // Use -1 or omit the deviceId to select the default device
			closeOnError: true // Close the stream if an audio error is detected, if set false then just log the error
		},
	});

	// Create a write stream to write out to a raw audio file
	const wStream = createWriteStream('./audio_test.wav');
	const transcode = cp.spawn('sox', ['--type=raw',
		'--rate=44100',
		'--encoding=signed',
		'--bits=16',
		'--endian=little',
		'--channels=2',
		'-',
		'--rate=44100',
		'--type=wav',
		'-'])


	//Start streaming
	ai.pipe(transcode.stdin)
	transcode.stdout.pipe(wStream);
	ai.start();

	//return duplex
}


//module.exports = createDuplex;
//

createWav()
