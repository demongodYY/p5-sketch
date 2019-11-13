let x = 40;
let y = 40;
let vx = 10;
let vy = 10;
let fillColorR = 255;
let fillColorG = 255;
let fillColorB = 255;
const maxWidth = document.body.clientWidth;
const maxHeight = document.body.clientHeight;

function setup() {
  createCanvas(maxWidth, maxHeight);
}

function draw() {
  if (x + 40 > maxWidth) {
    vx = (Math.random() + 0.1) * -10;
  }
  if (y + 40 > maxHeight) {
    vy = (Math.random() + 0.1) * -10;
  }

  if (x - 40 < 0) {
    vx = (Math.random() + 0.1) * 10;
  }

  if (y - 40 < 0) {
    vy = (Math.random() + 0.1) * 10;
  }
  if (x + 40 > maxWidth || y + 40 > maxHeight || x - 40 < 0 || y - 40 < 0) {
    fillColorR = Math.ceil(Math.random() * 255);
    fillColorG = Math.ceil(Math.random() * 255);
    fillColorB = Math.ceil(Math.random() * 255);
  }

  background(0, 12);
  x += vx;
  y += vy;
  fill(fillColorR, fillColorG, fillColorB);
  ellipse(x, y, 80, 80);

}
