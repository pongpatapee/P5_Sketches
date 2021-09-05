class CusShape{
  constructor(num_points, r){
    this.num_points = num_points;
    this.r = r;
    this.angle = 360 / this.num_points;
    this.vertices = [];
    this.speed = 0.05//0.6 * (this.num_points * 0.01);
    this.dot = createVector(0, 0);
    this.ind = 0;
    this.percent = 0.5;
  }
  
  calc_vertices(){
    let offset = 0;
    this.vertices = []; 
    if(this.num_points % 2 == 0){
      offset = this.angle/2;
    }
    let a = this.angle + offset;
    for(let i = 0; i < this.num_points; i++){
      let x = this.r*cos(a);
      let y = -this.r*sin(a);
      this.vertices.push(createVector(x, y));
      a += this.angle;
    }
    let len = this.vertices.length;
    let ind1 = floor((len-1)/2);
    let ind2 = ind1 -1;
    this.ind = ind1;
    this.dot = p5.Vector.lerp(this.vertices[ind1], this.vertices[ind2], this.percent);
  }
  

  show(c){

    noFill();
    stroke(c, 100, 100);
    beginShape();
    for(let i = 0; i < this.vertices.length; i++){
      let x = this.vertices[i].x;
      let y = this.vertices[i].y;
      vertex(x, y);
      //text(i, x, y);
    }
    endShape(CLOSE);
    fill(0);
    noStroke();
    
    ellipse(this.dot.x, this.dot.y, 10);
  }
  
  moveDot(){
    let ind1 = this.ind;
    let ind2 = this.ind - 1;
    if(ind2 >= this.vertices.length){
      ind2 = 0;
      //this.ind = 0;
    } 
    if(ind2 < 0){
      ind2 = this.vertices.length -1;
    }
    this.dot = p5.Vector.lerp(this.vertices[ind1], this.vertices[ind2], this.percent);
    
    this.percent += this.speed;
    
    if(this.percent > 1){
      this.percent = 0;
      this.ind--;
    }
    if(this.ind >= this.vertices.length){
      this.ind = 0;
    }
    if(this.ind < 0){
      this.ind = this.vertices.length -1;
    }
    
  }
  
}

