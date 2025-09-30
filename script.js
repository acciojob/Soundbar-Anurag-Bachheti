const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.getElementById("buttons");

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    currentAudio = audio;
  });

  buttons.appendChild(btn);
});

// Add stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("btn", "stop");
stopBtn.innerText = "stop";

let currentAudio = null;

stopBtn.addEventListener("click", () => {
  stopSounds();
});

buttons.appendChild(stopBtn);

function stopSounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
