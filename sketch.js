function setup() {
	createCanvas(640, 360);
}

function draw() {
// to use color for the objects, must define stroke, fill then shape


background(255)
ellipseMode(CENTER);
rectMode(CENTER)
//Body
fill(255,200,0);
rect (240,145,20,100);
//Head
fill(0,0,255)
ellipse(240,115,60,60)
//Eyes
fill(0,255,0)
ellipse(221,115,16,32)
ellipse(259,115,16,32)
//legs
line(80,195,220,285);
line(80,195,260,285)
}