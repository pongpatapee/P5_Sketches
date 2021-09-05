class UFO{
    constructor(){
        this.r = 200;
        this.a = -90; //angle 
        this.speed = 3;
        this.bullets = [];
        this.bullets_dir = [];
    }

    show(){
        noStroke();
        fill(255);
        let x = this.r * cos(this.a);
        let y = this.r * sin(this.a);
        ellipse(x, y, 50, 30);
    }

    move(){
        if(keyIsDown(LEFT_ARROW)){
            this.a -= this.speed;
        }
        else if(keyIsDown(RIGHT_ARROW)){
            this.a += this.speed;
        }
    }

    shoot(planet){
        let x = this.r * cos(this.a);
        let y = this.r * sin(this.a);
        let bullet = createVector(x, y);
        let bullet_dir = p5.Vector.sub(planet, bullet);

        this.bullets.push(bullet);
        this.bullets_dir.push(bullet_dir);
    }

    update(){
        for(let i = this.bullets.length - 1; i >= 0; i--){
            let x = this.bullets[i].x;
            let y = this.bullets[i].y; 
            noStroke();
            fill(0, 255, 0);
            ellipse(x, y, 10);
            this.bullets_dir[i].setMag(3);
            this.bullets[i].add(this.bullets_dir[i]);
        }
    }

    hit_planet(bullet, planet){
        distance = dist(bullet, planet);
        return (distance < planet.r)
    }

}