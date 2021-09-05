let angle;
let weight;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
  background(100);
  stroke(255);
  //strokeWeight(3);
  translate(width/2, height);
  angle = slider.value();
  len = 100;
  weight = 5;
  fractal(len, weight);
}

function fractal(len, weight){
  
  strokeWeight(weight);
  line(0,0, 0, -len);
  translate(0, -len);
  
  if(len <= 4){
    return;
  }
  
  push();
  rotate(angle);
  fractal(len * 0.67, weight * 0.67);
  pop();
  push();
  rotate(-angle);
  fractal(len * 0.67, weight * 0.67);
  pop();
  
}
