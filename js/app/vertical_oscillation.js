function setup() {
  /*------------------------------------------
  CANVAS SETUP: Please don't change
  ------------------------------------------*/
  p5Canvas = createCanvas(220, 220);
  setDimensions();
  /*----------------------------------------*/
  frameRate(30);  
}

function draw() {
  background(255);
  
  //VERTICAL OSCILLATION
  for(var x = spacing/2; x < width; x += spacing){
    for(var y = spacing/2; y < height; y += spacing){
      noFill();
      stroke((sin(y/(50+sin(frameCount*0.01)*40)+frameCount * 0.1) * 125) + 120);
      fill((sin(y/(50+sin(frameCount*0.01)*40)+frameCount * 0.1) * 125) + 120);
      ellipse(x, y, diameter, diameter);
    }
  }
}