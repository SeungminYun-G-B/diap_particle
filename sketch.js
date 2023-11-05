let system;

function setup() {
  createCanvas(720, 400);
  system = new particlesystem();
}

function draw() {
  system.pos(createVector(mouseX,mouseY));
  
  background(51);
  system.addParticle();
  system.run();
}

