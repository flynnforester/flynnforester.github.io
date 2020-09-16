let ypos = 345;
let xpos = 55;
let xstep = 140;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background("white");
  stroke("blue");
  strokeWeight(5);
  rect(005, 470, windowWidth - 10, 275);

  for (let i = 0; i < 4; i++) {
  push();
  triangle(xpos + (xstep * i), ypos, xpos + 65 + (xstep * i), ypos - 95, xpos + 125 + (xstep * i), ypos);
  fill("blue");
  stroke("white");
  rect(xpos - 5 + (xstep * i), ypos+5, 135, 175);
  fill("white");
  stroke("red");
  circle(xpos + 90 + (xstep * i), ypos + 45, 60);
  circle(xpos + 90 + (xstep * i), ypos + 115, 60);
  pop();
  }
}