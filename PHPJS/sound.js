var mic;

function setup() {
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
    var val = mic.getLevel();
    console.log(val);
}