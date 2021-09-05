class Sperm{
  constructor(spos, angle){
    this.pos = createVector(spos.x, spos.y);
    this.angle = angle;
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(5);
  }
  
  show(){
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
  update(){
    this.pos.add(this.vel); 

  }
}