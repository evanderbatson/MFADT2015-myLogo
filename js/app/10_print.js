function setup() {
  p5Canvas = createCanvas(223, 223);
  p5Canvas.parent('mainLogo');
  setDimensions();
  frameRate(1);  
}

function draw() {
  background(255);
  translate(-3, 0);
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