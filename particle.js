class particle{
    constructor(position){
        this.acceleration = createVector(0, 0.05);
        this.velocity = createVector(random(-1, 1), random(-1, 0));
        this.position = position.copy();
        this.lifespan = random(255);
        this.w = random(1,20);
    }
    
    run(){
        this.update();
        this.display();
    }
    
    update(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 2;
    }
    
    display(){
        noStroke();
        fill(127, this.lifespan);
        ellipse(this.position.x, this.position.y, this.w, this.w);
    }
    
    isDead(){
        return this.lifespan < 0;
    }
    
  }