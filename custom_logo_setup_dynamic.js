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