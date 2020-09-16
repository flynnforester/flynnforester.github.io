let strokestep = 25;

function setup() {
createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw(){
  background("#38f0bd");
  
   for (var i = 0; i < 25; i++) {
    push();
    translate(random(width), random(height));
    scale(0.5);
    makeShape();
    pop();
  }
  
  //master function
  function makeShape() {
    strokeWeight(3);
    for (var i = 0; i < 7; i++) {
	push();
    fill("#c9f3f4");
	circle(10, 10, 200);
    strokeWeight(6);
    stroke("white");
    noFill();
      arc(10, 10, 160, 160, PI + QUARTER_PI, TWO_PI);
	pop();
    }
    }
 
}
