var allCircles = [];
var gravity = 0.2;

function setup() {
  /*------------------------------------------
  CANVAS SETUP: Please don't change
  ------------------------------------------*/
  p5Canvas = createCanvas(220, 220);
  setDimensions();
  /*----------------------------------------*/

  // Create the circles
  for(var x = spacing/2; x < width; x += spacing){
    for(var y = spacing/2; y < height; y += spacing){
      var newCircle = new Circle(x, y, diameter);
      append(allCircles, newCircle);
    }
  }  
}

function draw() {
  background(255);
  
  for(var i = 0; i < allCircles.length; i++){
    allCircles[i].display();
  }
}

function Circle(_x, _y, _diameter){
  this.pos = {
    x: _x,
    y: _y    
  }
  this.diameter = _diameter;


  this.display = function(){
    this.diameter = map(dist(mouseX, mouseY, this.pos.x, this.pos.y),
                        0, width/2,
                        diameter, 2);
    noFill();
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);    
  }

}