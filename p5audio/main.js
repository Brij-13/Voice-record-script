const recordButton = document.querySelector("#record");
const stopButton = document.querySelector("#stop");
recordButton.addEventListener("click", () =>{
	record();
}
	)

stopButton.addEventListener("click", () =>{
	stop();
}
	)

let mic, recorder, soundFile;
let status = 0


function setup() {
	mic = new p5.AudioIn();
	recorder = new p5.SoundRecorder();
	soundFile = new p5.SoundFile();

	 recorder.setInput(mic);
}

function record() {
	mic.start();
	recorder.record(soundFile);
	stopButton.classList.remove("hidden");
	recordButton.classList.add("hidden");
}

function stop() {
	mic.stop();
	recorder.stop();
	soundFile.play();
	stopButton.classList.add("hidden");
	recordButton.classList.remove("hidden");
}