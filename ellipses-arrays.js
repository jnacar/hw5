var x = [];
var y = [];
var d = [];


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	
	for (var i = 0; i < 50; i = i + 1) {
		var xincr = 40;
		x[i] = random(50, 350);
		y[i] = random(50, 350);
		d[i] = random(10, 60);
	}
}
  
function draw() {
  background(255);
  noStroke();

	for (var i = 0; i < 50; i = i + 1) {
		// draw two ellipses
  	fill(120, 60, 100);
  	ellipse(x[i], y[i], d[i]);
	}
  
	for (var i = 0; i < 50; i = i + 1) {
		// 1% of the time
  	if (random() < 0.01) {
  		// random diameter between 10 and 400
    	d[i] = random(10, 50);
  	}
	}
}
