let res;
let cols;
let rows;
let grid = []; 
let clicking = false;
let clickState = 0;
let x;
let y;
let pause = true;

function setup(){
  createCanvas(600, 600);
  res = 20;
  cols = width/res;
  rows = height/res;
  
  grid = new Array(cols);
  for(let i = 0; i < cols; i++){
    grid[i] = new Array(rows); 
  }
  
  let choice = [0 , 1];
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      grid[i][j] = 0;//random(choice);
    }
  }

  
}

function draw(){
  frameRate(20);
  background(0);
  stroke(150);
  strokeWeight(3);
  
  x = floor(mouseX/res);
  y = floor(mouseY/res);
  
  if(clicking){
    grid[x][y] = clickState;
  }
  render_grid(grid);
  
  if(!pause){
    grid = calc_nextGen(grid);
  }
}

function mousePressed(){
  clickState = (grid[x][y] + 1)%2;
  clicking = true;
}

function mouseReleased(){
  clicking = false;
}

function keyPressed(){
  if(key == ' '){
    pause = !pause;
  }
  if(key == 'r'){
    reset();
  }
}

function reset(){
  pause = true;
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      grid[i][j] = 0;
    }
  }
}

function calc_nextGen(grid){
  let next = new Array(cols);
  for(let i = 0; i < cols; i++){
    next[i] = new Array(rows);
  }
  
  for(let i = 0; i < cols; i ++){
    for(let j = 0; j < rows; j++){
      let state = grid[i][j];
      let ncount = calc_neighbors(grid, i ,j);
      let newState = state;
      if(state == 1){
        if(ncount < 2){
          newState = 0;
        }
        else if(ncount >= 2 && ncount <= 3){
          newState = 1;
        }
        else if(ncount > 3){
          newState = 0;
        }
        
      } else {
        if(ncount == 3){
          newState = 1;
        }
      }
      next[i][j] = newState;
    }
  }
  return next; 
}

function calc_neighbors(grid, x ,y){
  let count = 0;
  // count += grid[i - 1][j + 1];
  // count += grid[i][j + 1];
  // count += grid[i + 1][j + 1];
  // count += grid[i + 1][j];
  // count += grid[i + 1][j];
  // count += grid[i - 1][j - 1];
  // count += grid[i][j - 1];
  // count += grid[i + 1][j - 1];
  for(let i = -1; i < 2; i++){
    for(let j = -1; j < 2; j++){
      count += grid[(x+i+cols)%cols][(y + j + rows)%rows];
    }
  }
  if(grid[x][y] == 1){
    count -= 1;
  }
  return count; 
}

function render_grid(grid){
   for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      if(grid[i][j] == 0){
        fill(255);
      }
      else if(grid[i][j] == 1){
        fill(0);
      }
      rect(i * res, j * res, res, res);
    }
  }
}