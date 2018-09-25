function setup() {
  // put setup code here
  createCanvas(400,400);
  background("#ccffee");
  noStroke();



}

function draw() {
  // hair
  fill("#ff0066");
  ellipse(200,280,125,100);
  // face
  fill(255);
  ellipse(200,180,180,220);
  // eyes
  fill(0);
  ellipse(180,170,18,30);
  fill(0);
  ellipse(220,170,18,30);
  // eyes pupils
  fill("#52143d");
  ellipse(180,170,8,10);
  fill("#52143d");
  ellipse(220,170,8,10);
  fill("#cc3399");
  ellipse(180,170,8,5);
  fill("#cc3399");
  ellipse(220,170,8,5);
  // hair
  fill("#ff0066");
  ellipse(200,90,125,100);
  // horn
  fill("#fff800");
  arc(200,120,25,180,PI,TWO_PI);
  // hair
  fill("#ff0066");
  ellipse(200,130,0,30);
  // mouth

}
