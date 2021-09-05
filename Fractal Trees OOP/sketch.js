let tree = [];
function setup() {
  createCanvas(400, 400);
  let len = 100;
  let begin = createVector(width/2, height);
  let end = createVector(width/2, height - len);
  root = new Branch(begin, end);
  tree[0] = root;
}

function draw() {
  background(51);
  for(let i = 0; i < tree.length; i++){
    tree[i].show();
    tree[i].jitter();
  }
}

function mousePressed(){
  for(let i = tree.length - 1; i >= 0; i--){
    if(!tree[i].finished){
      tree.push(tree[i].branch_right());
      tree.push(tree[i].branch_left());
    }
    tree[i].finished = true;
  }
}