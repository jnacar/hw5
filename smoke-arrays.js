var x = [];
var y = [];
var r = 0;

function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i < 100; i = i + 1) {
    x[i] = random(190, 230);
    y[i] = 290;
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);
	
	for (var i = 0; i < 100; i = i + 1) {
		// save graphics state
  	push();
  	// darker as it gets closer to 0
  	fill(y);
  	// rotate r around (x,y)
  	translate(x[i], y[i]);
  	rotate(r);
  	// draw rectangle
  	rect(-10, -10, 20, 20);
  	// reset rotation and translation
  	pop();
	}
  
	for (var j = 0; j < 100; j = j + 1) {
		// up 3 pixels
  	y[j] = y[j] - random(3,4);
	}
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  
	for (var k = 0; k < 100; k = k + 1) {
		// if reach past the top a bunch
  	if (y[k] < -150) {
    	y[k] = 290;
		}
  }
}
