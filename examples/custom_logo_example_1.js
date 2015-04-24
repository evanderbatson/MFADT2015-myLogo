function setup() {
  /*------------------------------------------
  CANVAS SETUP: Please don't change
  ------------------------------------------*/
  p5Canvas = createCanvas(220, 220);
  setDimensions();
  /*----------------------------------------*/
  
  // This is a very low-res animation...
  // No need of a 60 fps frame rate.
  frameRate(20);
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
      
      // Mapping the color based on the distance to the center
      // and the frame count. The cosine function will make it loop.
      var color = round(map(round(cos(frameCount/20) * dist(x, y, width/2, height/2)*6),
                            -width/2, width/2,
                            0, 255));

  		fill(color);
      stroke(0);
  		ellipse(x, y, diameter, diameter);
  	}
  }
}