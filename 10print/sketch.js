let x = 0;
let y = 0;
let spacing = 20;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  //background(220);
  stroke(255);
  if(random(1) < 0.5){
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  
  x += spacing;
  if(x > width){
    x = 0;
    y += spacing;
  }
}