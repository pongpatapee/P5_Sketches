let grid;
let dim = 3;
let size;
let player = ['O', 'X'];
let round = 1;
let winner = ' ';
function setup() {
  createCanvas(600, 600);
  grid = createGrid(3);
  size = width/dim; 
  
}

function draw() {
  stroke(0);
  strokeWeight(5);
  drawGrid(grid);

  noFill();
  strokeWeight(1);
  textSize(30);
  if(is_full(grid) || check_win(grid)){
    noLoop();
    if(!check_win(grid)){
      text('Tie', width/2, height/2);
    } else {
      round--;
      text('Winner is ' + player[round % 2], width/2, height/2);
    }
  }
}

function mousePressed(){
  let col = int(mouseX/size);
  let row = int(mouseY/size);
  if(grid[row][col] == ' '){
    grid[row][col] = player[round % 2];
    round++;
  } else {
    console.log('space not empty');
  }
  console.log(check_win(grid));
}

function createGrid(dim){
  let grid; 
  grid = new Array(dim);
  for(let i = 0; i < grid.length; i++){
    grid[i] = new Array(dim);
  }

  for(let i = 0 ; i < grid.length; i++){
    for(let j = 0; j < grid.length; j++){
      grid[i][j] = ' ';
    }
  }
  return grid;
}
/* Minimax */
function minimax(grid, depth, isMaximizing){
  
}

/* Game logic */
function is_full(grid){
  for(let i = 0; i < grid.length; i++){
    if(grid[i].includes(' ')){
      return false;
    }
  }
  return true;
}

function check_win(grid){
 
  for(let i = 0; i < grid.length; i++){
    //horizontal
    if(grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2] && grid[i][0] != ' '){
      return true;
    }

    //vertical
    if(grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i] && grid[0][i] != ' '){
      return true;
    }
  }

  //diagnal
  if(grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2] && grid[0][0] != ' '){
    return true;
  }
  if(grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0] && grid[2][0] != ' '){
    return true;
  }
  return false;
}

/* Displaying Grid */
function drawGrid(grid){
  
  fill(255);
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid.length; j++){
      rect(i * size, j * size, size, size);
      
      if(grid[i][j] == 'O'){
        drawO(i, j);
      }
      if(grid[i][j] == 'X'){
        drawX(i, j);
      }
    }
  }
}

function drawX(row, col){
  let x = (col + 1) * size - (size/2);
  let y = (row + 1) * size - (size/2);
  let offset = 50;
  noFill();
  line(x - offset, y - offset, x + offset, y + offset);
  line(x - offset, y + offset, x + offset, y - offset);

}

function drawO(row, col){
  let x = (col + 1) * size - (size/2);
  let y = (row + 1) * size - (size/2);
  noFill();
  ellipse(x, y, 150);
}


