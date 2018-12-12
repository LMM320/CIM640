class Snowflake

  constructor() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
  }

update
  render() {
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y)
  }
