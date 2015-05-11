var whichCircle = 0;
var whichColor = 0;
var countingUp = true;

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
  //COUNTING UP, uses thisCircle
  var thisCircle = 0;
  if (countingUp === true) {
    whichCircle++;
  } else {
    whichCircle--;
  }

  if (whichCircle > 110 || whichCircle < 0) {
    countingUp = !countingUp;
  }

  if (whichCircle < 0) {
    whichColor = int(random(255));
  }
  for(var x = spacing/2; x < width; x += spacing){
    for(var y = spacing/2; y < height; y += spacing){
      noFill();
      ellipse(x, y, newSize, newSize);
      thisCircle++;
      var newSize = diameter;
      if (thisCircle < whichCircle) {
        fill(whichColor);
        stroke(whichColor);
      } else {
        fill(255);
        strokeWeight(0.3);
        stroke(255);
      }
      ellipse(x, y, newSize, newSize);
    }
  }
}