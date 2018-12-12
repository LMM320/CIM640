var a = 1;
var num1 = 2;
var b = 'b';
var word1 = "word";
var trueFalse = true;
var sentences = "I'm a sentence";

var charColor = "orange";
var eyeSize = 20;

var facePosX = 100;
var facePosY = 100;
function setup() {
// put setup code here
createCanvas (400,400);
background(0);
background(255,255,255);
background("orange");
background("#333333");

console.log(a + num1);
console.log(a-num1);
console.log(a + b);
//Single Line comment
//console.Log(a * b);
}

/*
Block of comments
*/

//this is only in setup scope, only available in scope
var setVariable = 5;
}

function draw() {
  facePosX = mouseX;
  facePosY = mouseY;
//put drawing mode here
stroke('black');
strokeweight (num1);
//does not work, setupVariable's scope is
// strokeweight(setupVariable)


fill(charcolor);
//eyes
ellipse(facePosX,facePosY,eyeSize,eyeSize);
ellipse(facePosX + 60,facePosY,eyeSize,eyeSize);
//mouth
rect(facePosX,320,180,20);
