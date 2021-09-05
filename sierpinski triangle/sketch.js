let res;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  slider = createSlider(2, 200, 4, 1);
}

function draw() {
  background(51);
  noStroke();
  let r = 150;
  res = slider.value();
  translate(width/2, height/2);
  triangle(0, -r, -r*cos(30), r*sin(30), r*cos(30), r*sin(30));
  recur_triangle(r);
}


function recur_triangle(r){
  push();
  fill(0);
  let point1 = p5.Vector.add(createVector(0, -r), createVector(-r*cos(30), r*sin(30))).mult(0.5);
  
  let point2 = p5.Vector.add(createVector(-r*cos(30), r*sin(30)), createVector(r*cos(30), r*sin(30))).mult(0.5);
  
  let point3 = p5.Vector.add(createVector(0, -r), createVector(r*cos(30), r*sin(30))).mult(0.5);
  
  triangle(point1.x, point1.y, point2.x, point2.y, point3.x, point3.y);
  pop();
  
  if(r > res){
    push();
    rotate(0);
    translate(0, -r/2);
    recur_triangle(r/2);
    pop();
    push();
    rotate(120);
    translate(0, -r/2);
    recur_triangle(r/2);
    pop();
    push();
    rotate(-120);
    translate(0, -r/2);
    recur_triangle(r/2);
    pop();
  }

}