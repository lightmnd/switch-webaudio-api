// create audio context
const audioCtx = new AudioContext();
console.log(audioCtx.sampleRate);

// create buffer (collect all the sample available durint the time)
let buffer = audioCtx.createBuffer(
    1, // like "mono", 2 for "stereo", 6 for "5.1", ...
    audioCtx.sampleRate * 1, // collect all sample rate for 1 sec
    audioCtx.sampleRate // to pass all the sample
);

// create channel indexed from 0 to get the first channel,
// it returns an array of channels (in this case 48000, similar to audioCtx.sampleRate)
// that represent 1 second
let channelData = buffer.getChannelData(0);

// create signal mutating the channel data (for example using a for loop)
// using negative value to generate white noise sound
for (let i = 0; i < buffer.sampleRate; i++) {
    channelData[i] = Math.random() * 2 - 1;
}

// create white noise source
const wNSource = audioCtx.createBufferSource();
wNSource.buffer = buffer;

// create gain control
// imagine that you want to connect your inst to the amplifier
const gainControl = audioCtx.createGain();
// set volume during the time, use 0 to decrease, 1 to increase
gainControl.gain.setValueAtTime(0.05, 0);

// then connect to destination
wNSource.connect(gainControl);
gainControl.connect(audioCtx.destination);

// create Play button
const btn = document.createElement("button");
btn.innerText = "White Noise";
btn.addEventListener("click", () => {
    wNSource.start();
});

document.body.appendChild(btn);