var u;
var u2;
var count;
var mods = [];
var game1;
var game2;
var game3;

var colorSelected = [];
var colorPalette = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#000');
  noStroke();
  fill(255);
  textSize(28);
  text("GAME CENTER", 50, 835);

//white
  fill(255);//white
  ellipse(70,735,40,40);
//blue
  fill("#003EE7");//blue
  ellipse(130,735,40,40);
//red
  fill("#FF0000");//red
  ellipse(190,735,40,40);
//yellow
  fill("#FFE800");//yellow
  ellipse(250,735,40,40);
//green
  fill("#00FF00");//green
  ellipse(310,735,40,40);
//orange
  fill("#FF831C")//orange
  ellipse(370,735,40,40);
//purple
  fill("#A502FF")//purple
  ellipse(430,735,40,40);
//pink
  fill("#EC076B")//pink
  ellipse(490,735,40,40);
//light blue
  fill("#0BB0D7")//light blue
  ellipse(550,735,40,40);


  fill(255);
  ellipse(60,860,13,13);
  ellipse(85,860,13,13);
  ellipse(110,860,13,13);
  //ellipse(135,860,13,13);


  // rect(1030,712,70,20);
  // rect(1110,712,70,20);
  // rect(1190,712,70,20);
  // rect(1270,712,70,20);


  game1=false;
  game2=false;
  game3=false;

  //dots



  u=30;
  u2 = (u/2)*sqrt(3);
  var highCount = (height/u)-8;
  var wideCount = (width/u2)+60;
  count = int(highCount * wideCount);
  var index = 0;
  for (var xc = 0; xc < wideCount*2; xc++) {
    for (var yc = 0; yc < highCount*1; yc++) {
      mods[index++] = new Module((int(xc)*u),int(yc)*u);
    }
   }

   colorSelected[0]="WHITE";

}

function draw() {
  noStroke();
  for (var i = 0; i <= count; i++) {
    mods[i].draw1();
  }

  console.log(mouseX+","+mouseY);

  // translate(u2,u/2);
  // for (var i = 0; i <= count; i++) {
  //   mods[i].draw3();
  // }
//white
  if(mouseX>50 && mouseX<90 && mouseY>710 && mouseY<753)
  {
    colorSelected[0]="white";//white
  }
//blue
  if(mouseX>111 && mouseX<150 && mouseY>719 && mouseY<755)
  {
    colorSelected[0]="#003EE7";//blue
  }
//red
  if(mouseX>170 && mouseX<209 && mouseY>720 && mouseY<750)
  {
    colorSelected[0]="#FF0000";//red
  }
//yellow
  if(mouseX>230 && mouseX<270 && mouseY>718 && mouseY<755)
  {
    colorSelected[0]="#FFE800";//yellow
  }
//green
  if(mouseX>290 && mouseX<330 && mouseY>720 && mouseY<755)
  {
    colorSelected[0]="#00FF00";//green
  }
//orange
  if(mouseX>350 && mouseX<390 && mouseY>718 && mouseY<753)
  {
    colorSelected[0]= "#FF831C";//orange
  }
//purple
  if(mouseX>410 && mouseX<450 && mouseY>718 && mouseY<758)
  {
    colorSelected[0]="#A502FF";//purple
  }
  //pink
    if(mouseX>470 && mouseX<510 && mouseY>720 && mouseY<752)
    {
      colorSelected[0]="#EC076B";//pink
    }
  //l.blue
    if(mouseX>532 && mouseX<572 && mouseY>718 && mouseY<755)
    {
      colorSelected[0]="#0BB0D7";//l.blue
    }


    if(game1==true)
    {
Module.s=40;

    }

    if(game2==true)
    {

    }

    if(game3==true)
    {

    }

}

function mousePressed() {
  for (var i = 0; i <= count; i++) {
    mods[i].Pressed();
  }
}






function Module(_x, _y) {
  this.s = 20;
  this.x1 = _x;
  this.y1 = _y;
  this.x3 = _x;
  this.y3 = _y;
  this.b1 = false;
  this.b3 = false;
  this.isOverCircle1 = false;
  this.isOverCircle3 = false;
  this.c1 = '#333333';
  this.c3 = '#333333';
}


Module.prototype.draw1 = function() {
  push();
  translate(this.x1, this.y1);
  rectMode(CENTER);
  noStroke();
  fill(0);
  ellipse(0,0,this.s+1,this.s+1);
  fill(this.c1);
  ellipse(0,0,this.s,this.s);
  this.px1 = mouseX;
  this.py1 = mouseY;
  this.nx1 = this.x1;
  this.ny1 = this.y1;
  this.isOverCircle1 = (this.px1>this.nx1-this.s/2 && this.px1<this.nx1+this.s/2 && this.py1>this.ny1-this.s/2 && this.py1<this.ny1+this.s/2);
  if(this.isOverCircle1 === true)
  {
    fill('rgba(255, 255, 255, 0.2)');
    ellipse(0,0,this.s,this.s);
  } else {
	  noFill();
  }
  pop();
}


Module.prototype.draw3 = function() {
  push();
  translate(this.x3, this.y3);
  rectMode(CENTER);
  noStroke();
  fill(0);
  ellipse(0,0,this.s+1,this.s+1);
  fill(this.c3);
  ellipse(0,0,this.s,this.s);
  this.px3 = mouseX;
  this.py3 = mouseY;
  this.nx3 = this.x3+u2;
  this.ny3 = this.y3+(u/2);
  this.isOverCircle3 = (this.px3>this.nx3-this.s/2 && this.px3<this.nx3+this.s/2 && this.py3>this.ny3-this.s/2 && this.py3<this.ny3+this.s/2);
  if(this.isOverCircle3 === true)
  {
    fill('rgba(255, 255, 255, 0.2)');
    ellipse(0,0,this.s,this.s);
  } else {
	  noFill();
  }
  pop();
}


Module.prototype.Pressed = function() {
    if (this.isOverCircle1 === true){
      if(this.b1 === false){
      this.c1 = colorSelected[0];
      this.b1 = true;
      } else {
      this.c1 = '#333333';
      this.b1 = false;
      }
    }
    if (this.isOverCircle3 === true){
      if(this.b3 === false){
      this.c3 = colorSelected[0];
      this.b3 = true;
      } else {
      this.c3 = '#333333';
      this.b3 = false;
      }
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#000');

}
