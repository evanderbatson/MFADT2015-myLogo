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
  
  //NOISE
  var xoff = 0.0;
  noiseDetail(4, 0.5);
  for(var x = spacing/2; x < width; x += spacing){
    xoff += 0.3;
    var yoff = 0.0;
    for(var y = spacing/2; y < height; y += spacing){
      yoff += 0.3;
      var c = noise(xoff, yoff, frameCount * 0.05)*255;
      var cMod = (c-125) * 1;
      fill(c + cMod);
      stroke(c + cMod);
      var s = (diameter/2) + noise(xoff, yoff, frameCount * 0.05) * 15;
      ellipse(x, y, s, s);
    }
  }
}