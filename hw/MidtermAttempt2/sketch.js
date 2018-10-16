var x3 = 1;
var speed1 = 4;

var value = '#fbf3aa';
var starsButton;
var starRotate = false;
var Ball = function(x, y) {
 this.x = x;
 this.y = y;
 this.diameter = random(2,10);
  this.speedX = random(1,-1);
 this.color= color("random(0,255),random(0,255), random(0,255)");

}

Ball.prototype.show = function() {
 ellipse(this.x, this.y, this.diameter, this.diameter);

 fill(this.color);
 noStroke();
}

Ball.prototype.fall = function() {
 this.y = this.y + 1;
}

var balls = [];


function preload() {
  p1 = loadImage('assets/snowhouse.png');
  p2 = loadImage('assets/SantaSleigh.png');

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  x = mouseX;
  y = mouseY;

  starsButton = createButton("Rotate Stars");
  starsButton.position(10,10);
  starsButton.mousePressed(function(){

      starRotate = true;
  });

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
  textSize(20);
  text("Merry Christmas!", 400,100);
  line(width/2, 0, width/2, height);
  if(mouseY <= windowHeight/2){

//GRADIENT TO WHITE
    setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
  }

//STARS
fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.1, windowHeight*0.2);
if(starRotate == true){
  rotate(frameCount / 60.0);
}
star(0, 0, 10, 3, 8);
pop();

fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.2, windowHeight*0.4);
if(starRotate == true){
  rotate(frameCount / 60.0);
}
star(0, 0, 10, 3, 8);
pop();

fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.4, windowHeight*0.2);
if(starRotate == true){
  rotate(frameCount / -60.0);
}
star(0, 0, 10, 3, 8);
pop();


fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.6, windowHeight*0.1);
if(starRotate == true){
  rotate(frameCount / 60.0);
}
star(0, 0, 10, 3, 8);
pop();

fill('#ffffff');
noStroke();
push();
translate(windowWidth*0.8, windowHeight*0.4);
if(starRotate == true){
  rotate(frameCount / -60.0);
}
star(0, 0, 10, 3, 8);
pop();


//HOUSE
  imageMode(CENTER);
  image(p1, 500, 500, p1.width/2, p1.height/2);

//SANTA

  if(key==' ')
  {console.log("pressed space");
  image(p2, x3, windowHeight*0.2, p2.width/2, p2.height/2);
    if(x3 > windowWidth-p2.width/2 || x3 < 1){
    speed1 = speed1 * 2;
  }
  x3 = x3 + speed1;
  }

if(key=='r')
{
  p2=0;
}

//MOON Change
  fill(value);
  noStroke();
  ellipse(325,320,130,130);
  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
    balls[i].fall();
    balls[i].x = balls[i].x + balls[i].speedX;
  }

 if (this.y > height) {
  Ball= Ball * -1;

 }

 if (this.y < 0)
   Ball= Ball * -1;
  }

  function mousePressed() {
    balls.push( new Ball(mouseX, mouseY) );
    if(mouseX>325 && mouseX<325+130 && mouseY>320 && mouseY<320+130){
      if (value === '#fbf3aa') {
       value = '#f6e974';
      } else {
        value = '#fbf3aa';
     }
    }
}
