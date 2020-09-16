let ypos = 10;
let ystep = 100;
let xpos = 30;
let xstep = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("lightgrey");
  
  for (let j = 0; j < 25; j++) {
    for (let i = 0; i < 12; i++) {
      noStroke();
      rotate(45);
      fill("grey");
        rect(xpos+20+(xstep*i), ypos+(ystep*j), 40, 60, 20);
      fill("darkgreen");
        rect(xpos+5+(xstep*i), ypos+(ystep*j), 40, 60, 20);
      fill("green");
        rect(xpos+(xstep*i), ypos+(ystep*j), 40, 60, 20);
    }
  }
}