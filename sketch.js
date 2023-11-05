let system;
let gravity;

function setup() {
  createCanvas(720, 400);
  system = new particlesystem();
}

function draw() {
  system.pos(createVector(mouseX,mouseY));

  gravity = createVector(0, 0);
  
  if (keyIsDown(LEFT_ARROW)) {
  gravity.x -= 0.08;
}
if(keyIsDown(RIGHT_ARROW)) {
  gravity.x += 0.08;
}

if(keyIsDown(UP_ARROW)) {
  gravity.y -= 0.08;
}

if(keyIsDown(DOWN_ARROW)) {
  gravity.y += 0.08;
}

  background(51);
  system.addParticle();
  system.run();
  system.add(gravity);
}

