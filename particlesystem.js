class particlesystem{
    constructor(){
        this.particles = [];
    }

    pos(position){
        this.origin = position.copy();
    }
    
    add(aForce){
        for(let p of this.particles){
            p.applyForce(aForce);
          }
    }

    addParticle(){
        this.particles.push(new particle(this.origin));
    }
    
    run(){
        for (let i = this.particles.length-1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            if (p.isDead()) {
              this.particles.splice(i, 1);
            }
          }
    }
  }