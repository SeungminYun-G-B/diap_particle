class particle{
    constructor(position){
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.position = position.copy();
        this.lifespan = random(255);
        this.w = random(1,20);
        this.switch = false;
    }
    
    run(){
        this.update();
        this.display();
        this.checkEdge();
        this.disappear();
    }

    applyForce(aForce){
        this.acceleration.add(aForce);
      }
    
    update(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }

    checkEdge(){
        if(this.position.x <0 || this.position.x > width){
          this.switch = true;
          this.velocity.x *= -1;
        }
        if(this.position.y <0 || this.position.y > height){
          this.switch = true;
          this.velocity.y *= -1;
        }
    }

    disappear(){
        if(this.switch ==true){
          this.lifespan -= 5;
        }
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