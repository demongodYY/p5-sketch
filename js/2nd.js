let pg;

function setup() {
  createCanvas(document.body.clientWidth, document.body.clientHeight);
  pg = createGraphics(document.body.clientWidth, document.body.clientHeight);
}

function draw() {
  background(0,12);
  // ellipse(mouseX, mouseY, 80, 80);
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 80, 80);
  }
  // image(pg, 0, 0);
}
