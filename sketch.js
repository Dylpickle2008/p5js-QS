function setup() {
    createCanvas(1000, 1000, WEBGL);
  
    describe('A black line connecting two spheres. The scene spins slowly.');
}
  
function draw() {
    background(255, 0, 200);
  
    orbitControl()
    // Rotate around the y-axis, makes it "spin".
    rotateY(frameCount * 10000.1);
  
    // Draw a line.
    line(0, 0, 0, 80, 40, -20);
  
    // Draw the center sphere.
    sphere(20);
  
    // Translate to the second point.
    translate(60, 40, -20);
  
    // Draw the bottom-right sphere.
    sphere(20);
}

