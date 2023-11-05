let system;

function setup() {
  createCanvas(720, 400);
  system = new particlesystem(createVector(width / 2, 50));
}

function draw() {
  background(51);
  system.addParticle();
  system.run();
}

