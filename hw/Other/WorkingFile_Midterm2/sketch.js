var frameAmounts = 5;
var frameArray = [];
var currentFrame = 0;

var interval = 2000;
var prevMillis = 0;

var interval2 = 500;
var prevMillis2 = 0;
var counter = 0;

// Below is a pattern key
var controls = {
                  "play" : [50,600,50,'green'],
                  "stop" : [110,600,50,"red"]


                };

var state = "stop";

function preload(){
  for(var frames = 0; frames< frameAmounts; frames++){
    var frameString = "assets/snowhouse" + frames + ".png";
    frameArray[frames] = loadImage(frameString);
  }
}

function setup(){
    createCanvas(800,800);
    console.log(controls["play"]);
    console.log(controls["play"][3]); // green

    for(var keys in controls){
      console.log(keys + " values: " + controls[keys]);
    }
}

function draw(){
  image(frameArray[currentFrame],0,0);

if(millis() - prevMillis> interval && state == "play"){
  currentFrame++;
  prevMillis = millis();
}
  if(currentFrame > frameAmounts-1){
    currentFrame = 0;
}

ellipse(mouseX,mouseY,10,10);

for(var keys in controls){
  fill(controls[keys][3]);
  rect(controls[keys][0], controls[keys][1], controls[keys][2],
  controls[keys][2]);
  text(keys,controls[keys][0], controls[keys][1])

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] +
    controls[keys][2] && mouseY > controls[keys][1] && mouseY <
    controls[keys][1] + controls[keys][2]){
      fill(127,200);
      rect(controls[keys][0], controls[keys][1], controls[keys][2],
      controls[keys][2])
    }

  }
}
function mousePressed(){
  for(var keys in controls){

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] +
    controls[keys][2] && mouseY > controls[keys][1] && mouseY <
    controls[keys][1] + controls[keys][2]){

      state = keys;

    }
  }

}


////end of code
