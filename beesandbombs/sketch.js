let c;
let shapes = [];
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  colorMode(HSB, 100);
  c = 0;
  for(let i = 3 ; i <= 15; i++){
    shapes.push(new CusShape(i, 10 + i*20));
  }
  for(let i = 0; i < shapes.length; i++){
    shapes[i].calc_vertices();
  }
  print(shapes);
}


function draw() {
  background(255);
  noFill();
  strokeWeight(2);
  translate(width/2, height/2);
  rotate(-90);
  
  
  for(let i = 0; i < shapes.length; i++){
    shapes[i].show(c);
    shapes[i].moveDot();
    c += 8;
  }
  
  c = 0;
  
  //draw_shape(10, 60);
  //point(0, 0);
}

