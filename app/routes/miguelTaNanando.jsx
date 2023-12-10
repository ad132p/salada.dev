import React, { useEffect, useState, useRef } from 'react';


function addWavHeader(audioBuffer, sampleRate) {
  // WAV header information
  const channels = 1; // Mono audio
  const bitsPerSample = 16;
  const byteRate = (sampleRate * channels * bitsPerSample) / 8;
  const blockAlign = (channels * bitsPerSample) / 8;

  // Calculate the total file size (header + audio data)
  const dataSize = audioBuffer.byteLength;
  const fileSize = 44 + dataSize;

  // Create a new ArrayBuffer for the combined WAV file
  const wavBuffer = new ArrayBuffer(fileSize);
  const dataView = new DataView(wavBuffer);

  // Write the WAV header
  dataView.setUint32(0, 0x46464952); // "RIFF"
  dataView.setUint32(4, fileSize - 8, true); // Total file size - 8
  dataView.setUint32(8, 0x45564157); // "WAVE"
  dataView.setUint32(12, 0x20746d66); // "fmt "
  dataView.setUint32(16, 16, true); // Subchunk1Size
  dataView.setUint16(20, 1, true); // AudioFormat (PCM)
  dataView.setUint16(22, channels, true); // NumChannels
  dataView.setUint32(24, sampleRate, true); // SampleRate
  dataView.setUint32(28, byteRate, true); // ByteRate
  dataView.setUint16(32, blockAlign, true); // BlockAlign
  dataView.setUint16(34, bitsPerSample, true); // BitsPerSample
  dataView.setUint32(36, 0x61746164); // "data"
  dataView.setUint32(40, dataSize, true); // Subchunk2Size

  // Copy audio data from the old ArrayBuffer to the new ArrayBuffer
  const audioView = new Uint8Array(audioBuffer);
  const wavAudioView = new Uint8Array(wavBuffer, 44);
  wavAudioView.set(audioView);

  return wavBuffer;
}

// Example usage:
const originalAudioBuffer = new ArrayBuffer(/* ... */); // Replace with your audio data
const sampleRate = 44100; // Replace with your audio's sample rate

const wavWithHeaderBuffer = addWavHeader(originalAudioBuffer, sampleRate);



function playAudioBuffer(audioBuffer) {
  // Stop the currently playing audio, if any
  stopAudio();

  audioBufferSourceNode = audioContext.createBufferSource();
  audioBufferSourceNode.buffer = audioBuffer;
  audioBufferSourceNode.connect(audioContext.destination);
  audioBufferSourceNode.start();
}

function stopAudio() {
  if (audioBufferSourceNode) {
    audioBufferSourceNode.stop();
    audioBufferSourceNode.disconnect();
  }
}

const MiguelTaNanando = () => {

  const [streaming, setStreaming] = useState(false);
  const audioContextRef = useRef(null);
  const audioSourceRef = useRef(null);

  const handleStartStreaming = () => {
    setStreaming(true);
  };

  useEffect(() => {

    if (streaming) {
      const ws = new WebSocket('ws://192.168.0.163:8080/api/michaelstream'); // Replace with your WebSocket server URL
      ws.binaryType = 'arraybuffer';


      ws.onopen = () => {
        console.log('WebSocket connected');
      };



      ws.onmessage = async (event) => {
        const audioContext = (new window.AudioContext() || new window.webkitAudioContext());
        // When data is received from the WebSocket, decode it into an AudioBuffer
        const audioData = await event.data;


        // Create new arrayBuffer to add WAV header
        const newBuffer = new ArrayBuffer(44 + 65536);


        //create header buffer
        const headerBuffer = 
        const audioBuffer = await audioContext.decodeAudioData(audioData);

        var audioBufferSourceNode = audioContext.createBufferSource();
        audioBufferSourceNode.buffer = audioBuffer;
        audioBufferSourceNode.connect(audioContext.destination);
        audioBufferSourceNode.start();
      };

      // Clean up WebSocket on component unmount
      return () => {
        socket.close();
      };
    }

  }, [streaming]);

  return (
    <div>
      {streaming ? (
        <div>Streaming Audio...</div>
      ) : (
        <button onClick={handleStartStreaming}>Start Streaming</button>
      )}
    </div>
  )
};

export default MiguelTaNanando;
