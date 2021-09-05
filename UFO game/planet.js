class Planet{
    constructor(){
        this.pos = createVector(0, 0);
        this.r = 120;
    }

    show(){
        noStroke();
        fill(0, 150, 255);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}