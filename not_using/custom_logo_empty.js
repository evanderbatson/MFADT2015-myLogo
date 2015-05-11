function setup() {
  /*------------------------------------------
  CANVAS SETUP: Please don't change
  ------------------------------------------*/
  p5Canvas = createCanvas(220, 220);
  setDimensions();
  /*----------------------------------------*/
}

function draw() {
  background(255);
  
  /*------------------------------------------
  This loop draws the basic grid.
  Feel free to add animations/interaction,
  just keep it contrained to the dimensions
  — spacing, diameter, width, height.
  ------------------------------------------*/
  for(var x = spacing/2; x < width; x += spacing){
  	for(var y = spacing/2; y < height; y += spacing){
  		noFill();
      stroke(0);
  		ellipse(x, y, diameter, diameter);
  	}
  }
}