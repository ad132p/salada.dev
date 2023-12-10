const fs = require('fs');
const portAudio = require('naudiodon');
const cp = require('child_process')

// Create an instance of AudioIO with inOptions (defaults are as below), which will return a ReadableStream
var ai = new portAudio.AudioIO({
  inOptions: {
    channelCount: 2,
    sampleFormat: portAudio.SampleFormat16Bit,
    sampleRate: 44100,
    deviceId: -1, // Use -1 or omit the deviceId to select the default device
    closeOnError: true // Close the stream if an audio error is detected, if set false then just log the error
  }
});

// Create a write stream to write out to a raw audio file
const ws = fs.createWriteStream('audio.raw');
//const ws = fs.createWriteStream('audio.wav');
//const transcode = cp.spawn('sox', [ '--type=raw', 
//									'--rate=44100', 
//									'--encoding=signed', 
//									'--bits=16', 
//									'--endian=little', 
//									'--channels=2', 
//									'-', 
//									'--rate=44100', 
//									'--type=wav', 
//									'-'])
//Start streaming
ai.pipe(ws);
//ai.pipe(transcode.stdout).pipe(ws);
ai.start();



setTimeout(() => {
  ai.quit()
}, 10 * 1000);
