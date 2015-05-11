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
      var newCircle = new Circle(x, y);
      append(allCircles, newCircle);
    }
  }  
}

function draw() {
  background(255);
  
  /*------------------------------------------
  This loop draws the basic grid.
  Feel free to add animations/interaction,
  just keep it contrained to the dimensions
  — spacing, diameter, width, height.
  ------------------------------------------*/
  for(var i = 0; i < allCircles.length; i++){
    allCircles[i].checkMouse();
    allCircles[i].move();
    allCircles[i].display();
  }
}

function Circle(_x, _y){
  this.pos = {
    x: _x,
    y: _y    
  }

  this.speed = {
    x: 0,
    y: 0
  }

  this.isMoving = false;

  this.checkMouse = function(){
    if(dist(mouseX, mouseY, this.pos.x, this.pos.y) < diameter/2 && !this.isMoving){
      this.isMoving = true;
      this.speed.x = mouseX - pmouseX;
    }
  }

  this.move = function(){
    if(this.isMoving){
      
      // Add speed to location.
      this.pos.x = this.pos.x + this.speed.x;
      this.pos.y = this.pos.y + this.speed.y;

      // Add gravity to speed.
      this.speed.y = this.speed.y + gravity;

      //If square reaches the walls
      if (this.pos.x < diameter/2 + 1) {
        this.pos.x = diameter/2 + 1; 
        this.speed.x = this.speed.x * -0.8;
      }     
      if (this.pos.x > width - diameter/2 - 1) {
        this.pos.x = width - diameter/2 - 1; 
        //Dampening
        this.speed.x = this.speed.x * -0.8;
      }       

      // If square reaches the bottom
      // Reverse this.speed.y
      if (this.pos.y > height - diameter/2 - 1) {
        //Prevent the object from getting stuck outside the scene
        this.pos.y = height - diameter/2 - 1;          
        //        this.speed.y = -this.speed.y;  
        // Multiplying by -0.95 instead of -1 slows the square down each time it bounces (by decreasing this.speed.y).  
        // This is known as a "dampening" effect and is a more realistic simulation of the real world (without it, a ball would bounce forever).
        this.speed.y = this.speed.y * -0.8;

        //Still, it may bounce forever unless we make it stop
        if (abs(this.speed.y) < 3) {
          this.speed.y = 0;
        }
      }
    }
  }

  this.display = function(){
    noFill();
    stroke(0);
    ellipse(this.pos.x, this.pos.y, diameter, diameter);    
  }

}