function setup() {
  // put setup code here
  select("body").style("background-color","yellow");
  var container0 = createDiv();
  container0.id("container0");
  select("#container0").html("<h1>Your project title goes here!</h1>");
  select("#container0").style("width","400px");
  select("#container0").style("margin", "0 auto");

  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");
  //select("#mycanvas").center();
  cnv.parent(container0);
}

function draw() {
  // put drawing code here
  background(0);
}
