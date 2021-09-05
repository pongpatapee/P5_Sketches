class Penis {
  constructor(){
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    //temp
    this.w = 50;
    this.h = 10;
    this.angle = 0;//-PI/2;
  }
  
  
  show(){
    //stroke(255);
    noStroke();
    //noFill();
    fill(255, 180, 122);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    ellipse(-this.w/2, this.h/2 + 5, 20, 20);
    ellipse(-this.w/2, -this.h/2 - 5, 20, 20);
    pop();
  }
  
  turn(angle){
    if(keyIsDown(RIGHT_ARROW)){
      penis.angle += angle;
    } else if(keyIsDown(LEFT_ARROW)){
      penis.angle += -angle;
    }
  }
  
  move(){
    let force = p5.Vector.fromAngle(this.angle);
    force.mult(0.1)
    if(keyIsDown(UP_ARROW)){
      this.vel.add(force);
    }
    if(this.vel.mag() > 10){
      this.vel.setMag(10);
    }
    
    // let speed = createVector();
    // speed.x = this.vel.x * deltaTime * 0.01;
    // speed.y = this.vel.y * deltaTime * 0.01;
    this.pos.add(this.vel.mult(0.99));
    
    if(this.pos.x > width){
      this.pos.x = 0; 
    }
    if(this.pos.x < 0){
      this.pos.x = width;
    }
    if(this.pos.y > height){
      this.pos.y = 0;
    }
    if(this.pos.y < 0){
      this.pos.y = height;
    }
  }
  
  
}
