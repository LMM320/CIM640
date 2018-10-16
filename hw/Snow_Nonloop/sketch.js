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



function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
 background(0);

 //deletelater//rect(width/2,height/6,130,100,200);



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
 //clouds.push( new Clouds(width/2, height/2) );
}
