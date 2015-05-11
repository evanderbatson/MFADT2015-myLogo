function setup() {
  /*------------------------------------------
  CANVAS SETUP: Please don't change
  ------------------------------------------*/
  p5Canvas = createCanvas(220, 220);
  setDimensions();
  /*----------------------------------------*/
  frameRate(1);  
}

function draw() {
  background(255);
  
  //10 PRINT
  for (var x = spacing/2; x < width; x += spacing) {
    for (var y = spacing/2; y < height; y += spacing) {
      noFill();
      stroke(0);
      textAlign(CENTER, CENTER);
      textSize(24);
      var which = int(random(2));
      //ellipse(x, y, diameter, diameter);
      if (which === 0) {
        line(x-11,y+11,x+11,y-11);
      } else {
        line(x-11,y-11,x+11,y+11);
      }
    }
  }
}