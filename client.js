// Uncomment and fill out these if running the client stand-alone.
// var serverUrl = "ws://server-url.net:5000";
// var soundsUrl = "http://path-to-sounds.net/directory/";

var socket = new WebSocket(serverUrl);
socket.onmessage = (message) => {
  data = message.data.trim();
  console.log("Received: " + data);
  if (found = data.match(/^play ([a-zA-Z0-9]+)$/)) {
    playSound(found[1]);
  }
};

function requestSound(sound) {
  socket.send("play " + sound);
}

function playSound(sound) {
  var audio = new Audio(soundsUrl + sound + ".mp3");
  audio.play();
}
