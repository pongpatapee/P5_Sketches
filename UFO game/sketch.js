let planet;
let ufo;
function setup() {
  angleMode(DEGREES);
  createCanvas(600, 600);
  planet = new Planet();
  ufo = new UFO();
}

function draw() {
  translate(width/2, height/2);
  background(0);
  planet.show();
  ufo.show();
  ufo.move();
  ufo.update();
}

function keyPressed(){
  if(key == ' '){
    ufo.shoot(planet.pos);
  }
}
