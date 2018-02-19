var x = [];
var y = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	
	for (var i = 0; i < 10; i = i + 1) {
		x[i] = random(0, 230);
		y[i] = 220;
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  
  // draw drip
	for (var i = 0; i < 10; i = i + 1) {
		ellipse(x[i], y[i], 10);
	}
  
  // down 3 pixels each frame, but maybe should be accelerating?
  for (var i = 0; i < 10; i = i + 1) {
		y[i] = y[i] + random(1,6);
	}
  
  // if invisible for a full “height” amount…
	for (var i = 0; i < 10; i = i + 1) {
		if (y[i] > height*2) {
    	// reset
    	y[i] = 220;
		}
	}
}
