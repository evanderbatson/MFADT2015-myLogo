/*------------------------------------------
CANVAS SETUP: Please don't change
------------------------------------------*/
// Global variables
var spacing;        // Distance between the center of the dots
var diameter;       // Diameter of the dots
var debounce;       // Wait half a second before resizing the window
/*----------------------------------------*/
var whichCircle = 0;
var whichColor = 0;
var countingUp = true;
// var whichLogo = 0;
// var logo1;
// var logo2;
// var logo3;
// var logo4;
// var logo5;

function setDimensions(){
  console.log('Called setDimensions');
  spacing = width*0.1;
  diameter = spacing*2/3;
}

function setup() {
  /*------------------------------------------
  CANVAS SETUP: Please don't change
  ------------------------------------------*/
  p5Canvas = createCanvas(220, 220);
  setDimensions();
  frameRate(30);
  /*----------------------------------------*/
  // logo1 = loadImage("http://mfadt.parsons.edu/2015/wp-content/uploads/projects/" + 64 + int(random(192)) + "_logo.png");
  // logo2 = loadImage("http://mfadt.parsons.edu/2015/wp-content/uploads/projects/" + 64 + int(random(192)) + "_logo.png");
  // logo3 = loadImage("http://mfadt.parsons.edu/2015/wp-content/uploads/projects/" + 64 + int(random(192)) + "_logo.png");
  // logo4 = loadImage("http://mfadt.parsons.edu/2015/wp-content/uploads/projects/" + 64 + int(random(192)) + "_logo.png");
  // logo5 = loadImage("http://mfadt.parsons.edu/2015/wp-content/uploads/projects/" + 64 + int(random(192)) + "_logo.png");
}

function draw() {
  background(255);
  /*------------------------------------------
  This loop draws the basic grid.
  Feel free to add animations/interaction,
  just keep it contrained to the dimensions
  — spacing, diameter, width, height.
  ------------------------------------------*/
  
  //OTHER LOGOS - not working
  // frameRate(30);
  // image(logo1,0,0);


  //NOISE
  // var xoff = 0.0;
  // noiseDetail(4, 0.5);
  // frameRate(30);
  // for(var x = spacing/2; x < width; x += spacing){
  //   xoff += 0.3;
  //   var yoff = 0.0;
  //   for(var y = spacing/2; y < height; y += spacing){
  //     yoff += 0.3;
  //     var c = noise(xoff, yoff, frameCount * 0.05)*255;
  //     fill(c);
  //     stroke(c);
  //     var s = (diameter/2) + noise(xoff, yoff, frameCount * 0.05) * 15;
  //     ellipse(x, y, s, s);
  //   }
  // }

  //COUNTING UP, uses thisCircle
  // frameRate(30);
  // var thisCircle = 0;
  // if (countingUp === true) {
  //   whichCircle++;
  // } else {
  //   whichCircle--;
  // }

  // if (whichCircle > 110 || whichCircle < 0) {
  //   countingUp = !countingUp;
  // }

  // if (whichCircle < 0) {
  //   whichColor = int(random(255));
  // }
  // for(var x = spacing/2; x < width; x += spacing){
  //   for(var y = spacing/2; y < height; y += spacing){
  //     noFill();
  //     ellipse(x, y, newSize, newSize);
  //     thisCircle++;
  //     var newSize = diameter;
  //     if (thisCircle < whichCircle) {
  //       fill(whichColor);
  //       stroke(whichColor);
  //     } else {
  //       fill(255);
  //       stroke(255);
  //     }
  //     ellipse(x, y, newSize, newSize);
  //   }
  // }


  //SIZE OSCILLATION AND SINGLE BLACK CIRCLE (uses whichCircle declared out of scope)
  // frameRate(30);
  // var thisCircle = 0;
  // if (frameCount % 90 === 0) {
  //   whichCircle = int(random(100));
  // }
  // for(var x = spacing/2; x < width; x += spacing){
  //   for(var y = spacing/2; y < height; y += spacing){
  //     thisCircle++;
  //     noFill();
  //     var newSize = diameter;
  //     if (thisCircle == whichCircle) {
  //       fill(0);
  //       stroke(0);
  //     } else { 
  //       newSize = sin(frameCount*0.05)*diameter;
  //       stroke(255-((sin(frameCount*0.05)*255)));
  //     }
  //     ellipse(x, y, newSize, newSize);
  //   }
  // }

  //VERTICAL OSCILLATION
  // frameRate(30);
  // for(var x = spacing/2; x < width; x += spacing){
  //   for(var y = spacing/2; y < height; y += spacing){
  //     noFill();
  //     stroke((sin(y/(50+sin(frameCount*0.01)*40)+frameCount * 0.1) * 125) + 120);
  //     fill((sin(y/(50+sin(frameCount*0.01)*40)+frameCount * 0.1) * 125) + 120);
  //     ellipse(x, y, diameter, diameter);
  //   }
  // }

  //HORIZONTAL OSCILLATION
  // frameRate(30);
  // for(var x = spacing/2; x < width; x += spacing){
  //   for(var y = spacing/2; y < height; y += spacing){
  //     noFill();
  //     stroke((sin(x/(50+sin(frameCount*0.01)*40)+frameCount * 0.1) * 125) + 120);
  //     fill((sin(x/(50+sin(frameCount*0.01)*40)+frameCount * 0.1) * 125) + 120);
  //     ellipse(x, y, diameter, diameter);
  //   }
  // }


  //10 PRINT
  // frameRate(1);
  // for (var x = spacing/2; x < width; x += spacing) {
  //   for (var y = spacing/2; y < height; y += spacing) {
  //     noFill();
  //     stroke(0);
  //     textAlign(CENTER, CENTER);
  //     textSize(24);
  //     var which = int(random(2));
  //     //ellipse(x, y, diameter, diameter);
  //     if (which === 0) {
  //       line(x-11,y+11,x+11,y-11);
  //     } else {
  //       line(x-11,y-11,x+11,y+11);
  //     }
  //   }
  // }

}