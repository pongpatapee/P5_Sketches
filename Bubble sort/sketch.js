let arr = [];
function setup() {
  createCanvas(800, 400);
  let num_elem = 100;
  for(let i = 0; i < num_elem; i++){
    arr.push(random(0, 100));
  }
}

function draw() {
  background(51);
  for(let i = 0; i < arr.length; i++){
    let color = map(arr[i], 0, 100, 0, 255);
    fill(color);
    let w = width/arr.length;
    let scl = 2;
    let h = arr[i] * scl;
    rect(i*w, height - h, w, h);
  }
  if(mouseIsPressed){
    bubble_sort(arr);
  }
}

function bubble_sort(array){
  for(let i = 0; i < array.length - 1; i++){
    if(array[i] > array[i + 1]){
      let temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
    }
  }
}
