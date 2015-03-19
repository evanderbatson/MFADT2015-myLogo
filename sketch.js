var p5Canvas;
var canvasSizeRelativeToWidth = 0.2;

function setup() {
  p5Canvas = createCanvas(200, 200);
  resizeCanvas;
}

function draw() {
  background(255);
  var spacing = width/10;
  for(var x = spacing/2; x < width; x += spacing){
  	for(var y = spacing/2; y < height; y += spacing){
  		noFill();
      stroke(0);
  		ellipse(x, y, spacing/2, spacing/2);
  	}
  }
}

function resizeCanvas(){
  var newDimension = window.innerWidth*canvasSizeRelativeToWidth;
  p5Canvas.size(newDimension, newDimension);
}

window.onresize = function(event) {
  resizeCanvas();
};