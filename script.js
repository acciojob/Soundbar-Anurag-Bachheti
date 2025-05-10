const sounds = ['sound1', 'sound2', 'sound3'];

const buttonsDiv = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => playSound(sound));
  buttonsDiv.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSounds);
buttonsDiv.appendChild(stopBtn);

function playSound(){
	stopSound();
	const audio = new Audio(`sounds/${name}.mp3`);
	audio.play();
	window.currentAudi = audio;
}

function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
}