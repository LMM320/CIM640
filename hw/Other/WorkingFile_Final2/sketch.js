//breakout close (core mechanics)
//mouse to control the paddle, click to start

var paddle, ball, wallTop, wallBottom, wallLeft, wallRight;
var bricks;
var MAX_SPEED = 9;
var WALL_THICKNESS = 30;
var BRICK_W = 40;
var BRICK_H = 20;
var BRICK_MARGIN = 4;
var ROWS = 9;
var COLUMNS = 16;
var shoot;
var bullets =[];
var bulletPos;

var counter;

function setup() {
  createCanvas(800, 600);

  paddle = createSprite(width/10, height-50, 40 , 10);
  paddle.immovable = true;

  wallTop = createSprite(width/2, -WALL_THICKNESS/2, width+WALL_THICKNESS*2, WALL_THICKNESS);
  wallTop.immovable = true;

  wallBottom = createSprite(width/2, height+WALL_THICKNESS/2, width+WALL_THICKNESS*2, WALL_THICKNESS);
  wallBottom.immovable = true;

  wallLeft = createSprite(-WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
  wallLeft.immovable = true;

  wallRight = createSprite(width+WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
  wallRight.immovable = true;

  bricks = new Group();

  var offsetX = width/2-(COLUMNS-1)*(BRICK_MARGIN+BRICK_W)/2;
  var offsetY = 80;

  for(var r = 0; r<ROWS; r++)
    for(var c = 0; c<COLUMNS; c++) {
      var brick = createSprite(offsetX+c*(BRICK_W+BRICK_MARGIN), offsetY+r*(BRICK_H+BRICK_MARGIN), BRICK_W, BRICK_H);
      brick.shapeColor = color(255, 255, 255);
      bricks.add(brick);
      brick.immovable = true;
    }

  //the easiest way to avoid pesky multiple collision is to
  //have the ball bigger than the bricks
  // ball = createSprite(width/2, height-200, 11, 11);
  // ball.maxSpeed = MAX_SPEED;
  // paddle.shapeColor = ball.shapeColor = color(255, 255, 255);
paddle.shapeColor = color(255, 255, 255);

for(i=0;i<1;i++)
{
  bullets.push(new Bullet());
}



  // bullets = new Bullet();
  shoot=true;
  bulletPos=550;

  counter=550;
}

function draw() {
  background(50);
  counter=counter-5;
bulletPos=550;
bulletPos--;
  paddle.position.x = constrain(mouseX, paddle.width/2, width-paddle.width/2);

for(i=0;i<bullets.length;i++)
{
  bullets[i].display();
    bullets[i].update();
}
  // if(shoot==true)
  // {
  //   var bulletPos =550;
  //   fill(000)
  //   ellipse(paddle.position.x,counter ,20,20);
  //
  // }
bulletPos--;
console.log(counter);
  // ball.bounce(wallTop);
  // ball.bounce(wallBottom);
  // ball.bounce(wallLeft);
  // ball.bounce(wallRight);

  // if(ball.bounce(paddle))
  // {
  //   var swing = (ball.position.x-paddle.position.x)/3;
  //   ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  // }

  // ball.bounce(bricks, brickHit);

  drawSprites();
  }

function Bullet()
{
  var bulletY=550;
  var bulletX = paddle.position.x;
  this.display = function()
  {
    console.log("Im bullet");
    ellipse(bulletX,bulletY,10,10);
  }

  this.update = function()
  {
    bulletY = bulletY-5;
  }

}
function mousePressed() {
  for(i=0;i<1;i++)
  {
    bullets.push(new Bullet());
  }
}
//   if(ball.velocity.x == 0 && ball.velocity.y == 0)
//     ball.setSpeed(MAX_SPEED, random(90-10, 90+10));
// }
//
// function brickHit(ball, brick) {
//   brick.remove();
// }
