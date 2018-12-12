let ypos = 200;
let xpos = 80;
let xstep = 60;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  fill(50);
  noStroke();

  for (let i = 0; i < 5; i++) {
    ellipse(xpos + (xstep * i), ypos, 40, 40);
  }
}
