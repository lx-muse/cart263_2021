/*****************

RITA prototype
MC Lariviere in cart 263

A program that generates poems with JSON
https://github.com/dhowe/ritajs#with-p5js
https://creative-coding.decontextualize.com/intro-to-ritajs/
https://rednoise.org/rita/#learning

better than https://p5js.org/examples/dom-modifying-the-dom.html
******************/
function setup() {

  createCanvas(200,200);
  background(50);
  textSize(20);
  noStroke();

  let words = RiTa.tokenize("The elephant took a bite!")
  for (let i=0; i < words.length; i++) {
      text(words[i], 50, 50 + i*20);
  }
}
