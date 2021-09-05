let res = 40; 
let w;
let h;
let snake;
let dead = false;
function setup() {
  createCanvas(600, 600);
  //frameRate(5);
  w = int(width/res);
  h = int(height/res);
  let x = int(w/2) * res;
  let y = int(h/2) * res;
  snake = new Snake(x, y, res);

}

function draw() {
  if(!dead){
    draw_grid();
    snake.show();
    if(frameCount % 10 == 0){
      snake.update();
    }
    //snake.update();
    let x = snake.head.x;
    let y = snake.head.y;
    if(x == snake.food.x && y == snake.food.y){
      snake.eat();
    }
    let score = snake.body.length - 1;
    textSize(32);
    text('Score: '+ score, 10, 30);

    if(snake.hit_body() || snake.hit_wall()){
      dead = true;
      push();
      textAlign(CENTER);
      text('GAME OVER', width/2, height/2);
      pop();
    }
  }
  
  
  
  
}

function restart_game(){
  dead = false;
  let x = int(w/2) * res;
  let y = int(h/2) * res;
  snake = new Snake(x, y, res);
  snake.findFoodPos();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    snake.setDir(0, -1);
  }
  else if(keyCode == DOWN_ARROW){
    snake.setDir(0, 1);
  }
  else if(keyCode == LEFT_ARROW){
    snake.setDir(-1, 0);
  }
  else if(keyCode == RIGHT_ARROW){
    snake.setDir(1, 0);
  }
  else if(key == ' '){
    snake.grow();
  }
  else if(key == 'p'){
    noLoop();
  }
  else if(key == 'r'){
    restart_game();
    print('restarted');
  }
}

function draw_grid(){
  noStroke();
  for(let i = 0; i < w; i++){
    for(let j = 0; j < h; j++){
      if((i+j)%2 == 0){
        fill(82, 186, 74);
      } else {
        fill(49, 138, 43);
      }
      rect(i * res, j * res, res, res);
    }
  }
  
}