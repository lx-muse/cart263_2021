/*****************

The sine map
MC
https://www.reddit.com/r/processing/comments/aycu8u/p5js_the_sine_map/


more: https://github.com/rab2807/algorithmic-art/tree/main/circle_shades

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
// noprotect

var k = 1.89;
var x0, y0;

function sine(iters) {
  var x = x0;
  var y = y0;

  for (i = 0; i < iters; i++) {
    var xt = x;

    x = sin(k*(y + x));
    y = sin(k*(y - xt));

    point(map(x, -1, 1, 0, width), map(y, -1, 1, height, 0));
  }
}

function setup() {
  createCanvas(800, 800);
  background(0);

  noLoop();
}

function draw() {
  stroke(255, 10);

  for (j = 0; j < 100000; j++) {
    x0 = random(-1, 1);
    y0 = random(-1, 1);

    sine(100);
  }
}
