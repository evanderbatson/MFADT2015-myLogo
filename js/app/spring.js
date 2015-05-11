var allCircles = [];
var restLength = 20;
var k = 0.03;

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
      var newCircle = new Circle(x, y);
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

function Circle(_x, _y){
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

  this.checkMouse = function(){
    if(0 < pmouseX && pmouseX < width &&
       0 < pmouseY && pmouseY < height){
      if(dist(mouseX, mouseY, this.currPos.x, this.currPos.y) < diameter/2){
        this.speed.x = constrain((mouseX - pmouseX), -5, 5);
        this.speed.y = constrain((mouseY - pmouseY), -5, 5);
      }
    }
  }

  this.move = function(){

      // apply spring  
      this.applySpring();

      // Add speed to location.
      this.currPos.x = this.currPos.x + this.speed.x;
      this.currPos.y = this.currPos.y + this.speed.y;

      // damping
      this.speed.x *= 0.9;
      this.speed.y *= 0.9;
  }      

  this.applySpring = function(){
      // spring action
      var dir = {
        x: this.initPos.x - this.currPos.x,
        y: this.initPos.y - this.currPos.y,
      }
      var len = dist(this.initPos.x, this.initPos.y, this.currPos.x, this.currPos.y);
      var stretchLength = len - restLength;
      norm(dir.x, 0, 1);
      norm(dir.y, 0, 1);
      dir.x *= -1 * k * stretchLength;
      dir.y *= -1 * k * stretchLength;
      
      this.speed.x += dir.x;
      this.speed.y += dir.y;
  }

  this.display = function(){
    noFill();
    stroke(0);
    ellipse(this.currPos.x, this.currPos.y, diameter, diameter);    
  }

}