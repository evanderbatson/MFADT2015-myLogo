function setup() {
  /*------------------------------------------
  CANVAS SETUP: Please don't change
  ------------------------------------------*/
  p5Canvas = createCanvas();
  resizeCanvas();
  /*----------------------------------------*/

  frameRate(10);
}

var i = 0;
var j = 3;
var iDirection = 2;
var jDirection = 1;

function draw() {
  background(255);
  
  i += iDirection;
  j += jDirection;
  if(i >= 9 || i <= 0){
    iDirection *= -1;
  }
  if(j >= 9 || j <= 0){
    jDirection *= -1;
  }
  /*------------------------------------------
  This loop draws the basic grid.
  Feel free to add animations/interaction,
  just keep it contrained to the dimensions
  — spacing, diameter, width, height.
  ------------------------------------------*/
  for(var x = spacing/2; x < width; x += spacing){
  	for(var y = spacing/2; y < height; y += spacing){
      var column = (x-spacing/2)/spacing;
      var row = (y-spacing/2)/spacing;

      var color = 255;
      // if(round(frameCount/10) % 10 == column && ){
      if(column == i && row == j){
        color = 0;
      }

  		fill(color);
      stroke(0);
  		ellipse(x, y, diameter, diameter);
  	}
  }
  // noLoop();
}