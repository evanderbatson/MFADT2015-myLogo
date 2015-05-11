/*------------------------------------------
CANVAS SETUP: Please don't change
------------------------------------------*/
// Global variables
var p5Canvas;       // The P5 canvas that will display the logo
var canvasSizeInPercentage; // Canvas size relative to the width of the document
var canvasSizeStatic; // Canvas size that is static
var spacing;        // Distance between the center of the dots
var diameter;       // Diameter of the dots
var debounce;       // Wait half a second before resizing the window
var gridSelector;

  spacing = 22.5;
  diameter = 15;

var randomGrid = Math.floor((Math.random() * 1) + 0);

/*----------------------------------------*/

gridSelector = 0;

function setup() {
  p5Canvas = createCanvas(223, 223);
  p5Canvas.parent('mainLogo');
  frameRate(30);
  strokeWeight(0.3);

  for(var x = spacing/2; x < width; x += spacing){
    for(var y = spacing/2; y < height; y += spacing){
      var newCircle = new Circle(x, y, diameter);
      append(allCircles, newCircle);
    }
  }  
}

switch (gridSelector) {
  case 0:

    var allCircles = [];

    function draw() {
      background(255);
      translate(-3, 0);
      
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
  break;
  case 1:
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
  break;
}