let penis;
let sperm = [];
function setup() {
  createCanvas(600, 600);
  penis = new Penis();
}

function draw() {
  frameRate(60);
  background(0);
  penis.show();
  penis.turn(0.1);
  penis.move();
  //frameRate(10);
  
  fill(255);
  let offset = p5.Vector.fromAngle(penis.angle);
  let tip = createVector();
  tip.x = penis.pos.x + offset.x * penis.w/2;
  tip.y = penis.pos.y + offset.y * penis.w/2;
  if(keyIsDown(32)){
    sperm.push(new Sperm(tip, penis.angle));
  }
  print(frameCount)
  for(let i = 0; i < sperm.length; i++){
    sperm[i].update();
    sperm[i].show();
    
    if(sperm[i].pos.x > width || sperm[i].pos.x < 0 || sperm[i].pos.y > height || sperm[i].pos.y < 0){
      sperm.splice(i, 1);
    }
  }
  
  
}


