var frameAmounts = 4;
var frameArray = [];

function preload(){
  // var frameString = "assets/Thatwasclose0.jpg";
  // frameArray[0] = loadImage(frameString);

  for(var frames = 0); frames< frameAmounts; frames++){
    var frameString = "assets/Thatwasclose" + frames + ".jpg";
    frameArray[0] = loadImage(frameString);
  }
}

function setup(){
    createCanvas(500,500);
}

function draw(){
  image(frameArray[0],0,0);
}
