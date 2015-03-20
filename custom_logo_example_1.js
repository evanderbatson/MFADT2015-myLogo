function setup() {
  /*------------------------------------------
  CANVAS SETUP: Please don't change
  ------------------------------------------*/
  p5Canvas = createCanvas();
  resizeCanvas();
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
      
      var color = round(map(round(cos(frameCount/40) * dist(x, y, width/2, height/2)*6),
                            -width/2, width/2,
                            0, 255));

  		fill(color);
      stroke(0);
  		ellipse(x, y, diameter, diameter);
  	}
  }
}