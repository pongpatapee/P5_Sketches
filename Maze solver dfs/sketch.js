// let maze = [['#','#','#','#','#','#','O', '#'],
// 		['#',' ',' ','#',' ','#',' ', '#'],
// 		['#',' ',' ',' ',' ','#',' ', '#'],
// 		['#',' ','#','#',' ','#',' ', '#'],
// 		['#',' ','#',' ',' ',' ',' ', '#'],
// 		['#',' ','#','#','#','#',' ', '#'],
// 		['#',' ',' ',' ',' ','#',' ', '#'],
// 		['#','#','#','X','#','#','#', '#']]

let maze = [];
let size;
let moves = ['L', 'R', 'U', 'D']
let pos;
let state;
let path = [];
let path_moves = [];
let clicking = false;

function setup() {
  createCanvas(600, 600);
  maze = create2Darr(20);
  empty_maze();
  state = '#';
  size = int(width/maze.length);
  div = createDiv('').size(100, 100);
}

function draw() {
  background(220);
  draw_grid();
  pos = get_start_pos();
  
  div.html('Current state: '+ state);
  if(clicking){
    let y = floor(mouseY/size);
    let x = floor(mouseX/size);
    
    maze[y][x] = state;
    //write logic so that there can only be one entrance and exit
  }
  
}

function empty_maze(){
  for(let y = 0; y < maze.length; y++){
    for(let x = 0; x < maze[y].length; x++){
      if(x == 0 || y == 0 || x == maze.length - 1 || y == maze.length -1){
        maze[y][x] = '#';
      } else {
        maze[y][x] = ' ';
      }
    }
  }
}

function create2Darr(size){
  arr = new Array(size);
  for(let i = 0; i < size; i++){
    arr[i] = new Array(size);
  }
  
  return arr;
}

function keyPressed(){
  if(key == 'w'){
    state = '#';
  }
  else if(key == 'o'){
    state = 'O';
  }
  else if(key == 'x'){
    state = 'X';
  } else if (key == 'e'){
    state = ' ';
  } else if(key == 's'){
    //make sure it doesn't solve if no exit or entrance
    dfs(pos, path, path_moves, false);
    console.log(path_moves);
    draw_path(path);
    pos = path[path.length -1];
    path = [];
    path_moves = [];
    console.log('Solved');
  } else if(key == ' '){
    empty_maze();
    console.log('Cleared Maze');
  }
  console.log('Changed state to: ' + state);
  
}

function mousePressed(){
  clicking = true
}

function mouseReleased(){
  clicking = false;
}

function draw_grid(){
  push();
  stroke(0);
  strokeWeight(2);
  for(let y = 0; y < maze.length; y++){
    for(let x = 0; x < maze[y].length; x++){
      switch(maze[y][x]){
        case ' ':
          fill(255);
          break;
        case '#':
          fill(0);
          break;
        case 'X':
          fill(255, 0, 0);
          break;
        case 'O':
          fill(0, 0, 255);
          break;
        case '+':
          fill(255, 255, 0);
          break;
      }
      //test
      // if(x == pos.x && y == pos.y){
      //   fill(0, 255, 255);
      // }

      rect(x * size, y * size, size, size);
    }
  }
  pop();
}

function is_valid(pos, move){
  let x = pos.x;
  let y = pos.y;
  
  if(move == 'L'){
    if(x - 1 < 0){
      return false;
    }
    return !(maze[y][x - 1] == '#' || maze[y][x - 1] == 'O')
  }
  else if(move =='R'){
    if(x + 1 >= maze[0].length){
      return false;
    }
    return !(maze[y][x + 1] == '#' || maze[y][x + 1] == 'O')
  }
  else if(move =='U'){
    if(y - 1 < 0){
      return false;
    }
    return !(maze[y - 1][x] == '#' || maze[y - 1][x] == 'O')
    
  }
  else if(move =='D'){
    if(y + 1 >= maze.length){
      return false;
    }
    return !(maze[y + 1][x] == '#' || maze[y + 1][x] == 'O')
    
  }
  
}

function get_start_pos(){
  for(let y = 0; y < maze.length; y++){
    for(let x = 0; x < maze[y].length; x++){
      if(maze[y][x] == 'O'){
        return createVector(x, y);
      }
    }
  }
  return createVector(-1, -1);
}

function update_pos(pos, move){
  let x = pos.x; 
  let y = pos.y;
  switch(move){
    case 'L':
      x -= 1;
      break;
    case 'R':
      x += 1;
      break;
    case 'U':
      y -= 1;
      break;
    case 'D':
      y += 1;
      break;
  }
  return createVector(x, y);
}

function dfs(pos, path, path_moves, exited){
  let x = pos.x;
  let y = pos.y; 
  
  if(maze[y][x] == 'X'){
    //console.log(pos)
    return true;
  }
  
  for(let move of moves){
    let new_pos = update_pos(pos, move);
    if(is_valid(pos, move) && !in_path(path, new_pos)){
      path.push(new_pos.copy());
      path_moves.push(move);
      exited = dfs(new_pos, path, path_moves, exited);
      if(exited){
        return true;
      }
      path.pop();
      path_moves.pop();
    }
    
  }
  return false;
}

function draw_path(path){
  for(let p of path){
    let x = p.x; 
    let y = p.y;
    if(maze[y][x] != 'O' && maze[y][x] != 'X'){
      maze[y][x] = '+';
    }
  }
}

function in_path(path, pos){
  for(let p of path){
    if(p.equals(pos)){
      return true;
    }
  }
  return false;
}
