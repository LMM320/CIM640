var x3 = 1;
var speed1 = 4;




function preload() {
  p1 = loadImage('assets/snowhouse.png');
  p2 = loadImage('assets/SantaSleigh.png');

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}

function draw() {
  // put drawing code here
  background(255);
  var color1 = color('#536b6a');
  var color2 = color('#ffffff');

  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
  //Interface
  textSize(30);
  text("Merry Christmas!", 100,100);
  line(width/2, 0, width/2, height);
  if(mouseY <= windowHeight/2){

//GRADIENT TO WHITE
    setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
  }

//MOON
fill('#fbf3aa');
noStroke();
ellipse(300,200,200,200)

//STARS
fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.1, windowHeight*0.2);
rotate(frameCount / 60.0);
star(0, 0, 10, 3, 8);
pop();

fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.2, windowHeight*0.4);
rotate(frameCount / 60.0);
star(0, 0, 10, 3, 8);
pop();

fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.4, windowHeight*0.2);
rotate(frameCount / -60.0);
star(0, 0, 10, 3, 8);
pop();


fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.6, windowHeight*0.1);
rotate(frameCount / 60.0);
star(0, 0, 10, 3, 8);
pop();

fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.8, windowHeight*0.4);
rotate(frameCount / -60.0);
star(0, 0, 10, 3, 8);
pop();


//HOUSE
  imageMode(CENTER);
  image(p1, 500, 500, p1.width/2, p1.height/2);

//SANTA
  image(p2, x3, windowHeight*0.2, p2.width/2, p2.height/2);

  if(x3 > windowWidth-p2.width/2 || x3 < 1){
    speed1 = speed1 * -1;
  }
  x3 = x3 + speed1;
}
