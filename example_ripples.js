/*------------------------------------------
CANVAS SETUP: Please don't change
------------------------------------------*/
// Global variables
var spacing;        // Distance between the center of the dots
var diameter;       // Diameter of the dots
var debounce;       // Wait half a second before resizing the window
/*----------------------------------------*/

function setDimensions(){
  console.log('Called setDimensions');
  spacing = width*0.1;
  diameter = spacing*2/3;  
}

var allCircles = [];

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
    allCircles[i].checkMouse();
    allCircles[i].move();
    allCircles[i].display();
  }
}

function Circle(_x, _y, _diameter){
  this.initPos = {
    x: _x,
    y: _y    
  }
  this.currPos = {
    x: _x,
    y: _y    
  }
  this.speed = {
    x: 0,
    y: 0
  }
  this.isRippling = false;
  this.diameter = _diameter;
  this.alpha = 255;

  this.checkMouse = function(){
    if(dist(mouseX, mouseY, this.currPos.x, this.currPos.y) < diameter/2 && !this.isRippling){
      this.isRippling = true;
    }    
  }

  this.move = function(){
    if(this.isRippling){
      this.diameter += 1;
      this.alpha = map(this.diameter, diameter, width/2, 255, 0);
    }else{
      if(this.alpha < 255){
        this.alpha += 5;
      }
    }
    if(this.diameter > width/2){
      this.diameter = diameter;
      this.isRippling = false;
    }
  }

  this.display = function(){
    noFill();
    
    stroke(0, this.alpha);
    ellipse(this.currPos.x, this.currPos.y, this.diameter, this.diameter);  
  }

}