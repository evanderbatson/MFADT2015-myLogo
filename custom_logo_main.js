function setup() {
  p5Canvas = createCanvas(223,223);
  p5Canvas.parent('mainLogo');
  frameRate(30);
}

function draw() {
  // background(0,0,0,0);
  background(255);
  grid();
}

function grid() {
  translate(-3, 0);
  for(var x = spacing/2; x < width; x += spacing){
    for(var y = spacing/2; y < height; y += spacing){

      var color = round(map(round(cos(frameCount/20) * dist(x, y, width/2, height/2)*6),
                            -width/2, width/2,
                            0, 255));

      fill(color);
      strokeWeight(0.3);
      stroke(0);
      ellipse(x, y, diameter, diameter);
    }
  }
}