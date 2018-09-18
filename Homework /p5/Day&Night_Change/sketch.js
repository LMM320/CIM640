var sun;
var moon;

var r = 255;
var g= 255;
var b = 255;

var cX = 50;
var cY = 50;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

function preload(){
  sun= loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  createCanvas (400,400);

}

function draw() {
  // put drawing code here
  fill (r,g,b);
  rect(rectX,rectY,rectSize,rectSize)
}

function mousePressed()
