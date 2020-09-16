let ypos = 550;
let ystep = 60;
let xpos = 01;
let xstep = 60;
let r, g, b;

function setup() {
  
  createCanvas(500,750);
  r = random(255);
  g = random(255);
  b = random(255);
  
  a = random(100,200);
  c = random(80,150);
  d = random(100,200);
    
    
  //saturation?
  background(r,g,b);
  
  //photo background
    fill("white");
    noStroke();
    rect(60, 75, 380, 380);
  
  //dog
  r = random(150);
  g = random(150);
  b = random(150);
    fill(r,g,b);
    stroke("black");
    strokeWeight (4);
  
  //body
    ellipse(245, 420, 250, 60);
  
  //ears
    triangle(125, 255, 120, 100, 200, 135);
    triangle(374, 255, 370, 100, 290, 135);
  
  //head
    rect(230, 320, 40, 100);
    ellipse(250, 250, a, d);
    circle(250, 320, c);
  
  //dog face
    fill("black");
    circle(205, 250, 20);
    circle(290, 250, 20);
    triangle(225, 285, 280, 285, 252, 305);
    fill("white");
    circle(210, 245, 10);
    circle(295, 245, 10);
  
  //titles
    textSize(110);
    fill("white");
    stroke("black");
    strokeWeight(8);
    text('MISSING', 20, 100);
    textSize(75);
    text('Reward: $500', 20, 525);
  
   //tag body
    fill("white");
    stroke("black");
    strokeWeight(2);
    for (let i = 0; i < 8; i++) {
      rect(xpos + (xstep * i), ypos, 60, 201);
    }
  
  //tag photo
    noStroke();
    fill(r,g,b);
    for (let j = 0; j < 8; j++) {
      circle(xpos + 30 +(xstep * j), ypos + 30, 40, 40);
    }
    
  //tag text
    angleMode(DEGREES);
    rotate(90);
    fill("black");
    textSize(13);
    noStroke();
    text('Take One', 620, -485);
    //on tag
    textSize(15);
    for (let k = 0; k < 8; k++) {
      text('555-555-5555', xpos + 625, ypos - 985 +(ystep * k));
    }
    textSize(18);
    for (let m = 0; m < 8; m++) {
      text('Lost Dog', xpos + 625, ypos - 1010 +(ystep * m));
    }   
}

function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}

