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
  spacing = 22.5;
  diameter = 15;  
}

function loadJsFile(){
	var files = ['main',
               'noise',
               'counting_up',
               'size_oscillation',
               'vertical_oscillation',
               'horizontal_oscillation',
               '10_print',
               'physics',
               'ripples',
               'size_change',
               'spring',
               'bouncing_ball'];
               
	var randomIndex = Math.floor(Math.random() * files.length);
	// console.log(randomIndex + '/' + (files.length - 1));
	var filename = 'js/app/' + files[randomIndex] + '.js';
	// console.log(filename);

    var fileref = document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);

    if (typeof fileref != "undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}

loadJsFile();