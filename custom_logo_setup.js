/*------------------------------------------
CANVAS SETUP: Please don't change
------------------------------------------*/
// Global variables
var p5Canvas;       // The P5 canvas that will display the logo
var canvasSizeInPercentage; // Canvas size relative to the width of the document
var spacing;        // Distance between the center of the dots
var diameter;       // Diameter of the dots
var debounce;       // Wait half a second before resizing the window

function resizeCanvas(){
  canvasSizeInPercentage = 0.25;
  var newDimension = round(window.innerWidth*canvasSizeInPercentage);
  p5Canvas.size(newDimension, newDimension);
  spacing = round(width*0.1);
  diameter = round(spacing*2/3);
}

window.onresize = function(event) {
    clearTimeout(debounce);
    debounce = setTimeout(doneResizing, 500);
  function doneResizing(){
      resizeCanvas();
  }
};
/*----------------------------------------*/