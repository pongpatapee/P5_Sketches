class Snake{
  constructor(x, y, size){
    this.body = [];
    this.head = createVector(x, y);
    this.body.push(this.head);
    this.vel = createVector(1, 0);
    this.size = size;
    this.food = this.findFoodPos();
  }  
  update(){
    this.vel.setMag(this.size);
    this.body.pop();
    let head = this.head.add(this.vel).copy();
    this.body.unshift(head);
    
    //this.head = this.body[0];
    
  }
  
  grow(){
    let x = this.body[0].x;
    let y = this.body[0].y;
    let tail = createVector(x, y);
    tail.sub(this.vel);
    this.body.push(tail);
  }
  
  eat(){
    this.food = this.findFoodPos();
    this.grow();
  }
  
  hit_wall(){
    let head = this.body[0]; 
    let has_hit = head.x > width - this.size || head.x < 0 || head.y < 0 || head.y > height - this.size;
    
    return has_hit;
  }
  
  hit_body(){
    let head = this.body[0];
    for(let i = 1; i < this.body.length; i++){
      if(head.x == this.body[i].x && head.y == this.body[i].y){
        return true;
      }
    }
    return false;
  }
  
  findFoodPos(){
    //make logic for not spawning on snake later
    let fx = int(random(width/this.size)) * this.size;
    let fy = int(random(height/this.size)) * this.size;

    return createVector(fx, fy);
  }
  
  show(){
    noStroke();
    
    for(let i = 0; i < this.body.length; i++){
      if(this.head.x == this.body[i].x && this.head.y == this.body[i].y){ //i == 0
        fill(12, 59, 125);
      } else {
        fill(12, 81, 125);
      }
      rect(this.body[i].x, this.body[i].y, this.size, this.size); 
    }
    fill(245, 49, 49);
    rect(this.food.x, this.food.y, this.size, this.size);
  }
  
  
  
  setDir(x, y){
    //console.log(this.possibleDir(x,y));
    if(this.possibleDir(x, y)){
      this.vel.x = x; 
      this.vel.y = y;
    }
    
  }
  
  possibleDir(x, y){
    // work on this
    if(this.body.length > 1){
      let h = this.body[0];
      let b = this.body[1];
      let no_left = h.x > b.x && x < 0;
      let no_right = h.x < b.x && x > 0;
      let no_up = h.y < b.y && y > 0;
      let no_down = h.y > b.y && y < 0;
      
      if(no_left || no_right || no_up || no_down){
        return false;
      }
    }
    return true;
  }
  
  // edges(){
  //   if(this.body[0].x > width - this.size){
  //     this.body[0].x = 0;
  //   }
  //   if(this.body[0].x < 0){
  //     this.body[0].x = width - this.size;
  //   }
  //   if(this.body[0].y > height - this.size){
  //     this.body[0].y = 0;
  //   }
  //   if(this.body[0].y < 0){
  //     this.body[0].y = height - this.size;
  //   }
  // }
}
