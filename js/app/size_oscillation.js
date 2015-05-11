var whichCircle = 0;

function setup() {
  p5Canvas = createCanvas(223, 223);
  p5Canvas.parent('mainLogo');
  setDimensions();
  /*----------------------------------------*/
}

function draw() {
  background(255);
  translate(-3, 0);
  strokeWeight(0.3);
  //SIZE OSCILLATION AND SINGLE BLACK CIRCLE (uses whichCircle declared out of scope)
  frameRate(30);
  var thisCircle = 0;
  if (frameCount % 90 === 0) {
    whichCircle = int(random(100));
  }
  for(var x = spacing/2; x < width; x += spacing){
    for(var y = spacing/2; y < height; y += spacing){
      thisCircle++;
      noFill();
      var newSize = diameter;
      if (thisCircle == whichCircle) {
        fill(0);
        stroke(0);
      } else { 
        newSize = sin(frameCount*0.05)*diameter;
        stroke(255-((sin(frameCount*0.05)*255)));
      }
      ellipse(x, y, newSize, newSize);
    }
  }
}