let ha = 0;
let ma = 0;
let sa = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  push();
  translate(width/2, height/2);
  rotate(-90);
  background(51);
  let h = hour();
  let m = minute();
  let s = second();
  
  sa = (s/60) * 360;
  ma = (m/60) * 360;
  ha = (h/24) * 360;
  noFill();
  strokeWeight(10);
  
  //seconds
  stroke(31,208,187);
  arc(0, 0, 200, 200, 0, sa);
  line(0, 0, 85*cos(sa), 85*sin(sa));
  
  //minute
  stroke(165,246,13);
  arc(0, 0, 225, 225, 0, ma);
  line(0, 0, 65*cos(ma), 65*sin(ma));
  
  //hour
  stroke(234,30,85);
  arc(0, 0, 250, 250, 0, ha);
  line(0, 0, 45*cos(ha), 45*sin(ha));
  
  pop();
  
  fill(255);
  text('Current Time:\n' + h + ' hour ' + m + ' minute ' + s + ' seconds', 5, 50);
}