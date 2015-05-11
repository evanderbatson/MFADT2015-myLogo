function setup() {
  p5Canvas = createCanvas(223, 223);
  p5Canvas.parent('mainLogo');
  setDimensions();
  /*----------------------------------------*/
  frameRate(30);  
}

function draw() {
  background(255);
  translate(-3, 0);
  strokeWeight(0.3);
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