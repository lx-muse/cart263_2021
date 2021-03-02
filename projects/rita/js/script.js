/*****************

RITA prototype - Project 1
Night at the Movie - Dead Poets Society mashup
MC Lariviere in cart 263

A program that generates poems with JSON

https://github.com/dhowe/ritajs#with-p5js
https://creative-coding.decontextualize.com/intro-to-ritajs/
https://rednoise.org/rita/#learning

better than https://p5js.org/examples/dom-modifying-the-dom.html
******************/

// Poem is an object of multiple texts
let poem = {
  userVerse: `*redacted*`,
  quotes: `*redacted*`,
  puckEnding: `*redacted*`,
};
// A full poem inspired by the movie
let midsummerPoem;
// in Json format, loading Shakesperian quotes and Midsummer Nights Dream
let poemData = undefined;
let midsummerPoemData = undefined;


// function preload() {
//   poemData = loadJSON("assets/data/shakespeare_phrases.json");
//   midsummerPoemData = loadJSON("assets/data/midsummer.json");
// }


function setup() {

  createCanvas(200,200);
  background(50);
  textSize(20);
  noStroke();

  generatePoem();
  addVerse();
  console.log(poem);


  let words = RiTa.tokenize("The elephant took a bite!")
  for (let i=0; i < words.length; i++) {
      text(words[i], 50, 50 + i*20);
  }
}



// generates a poem once
function generatePoem() {
  poemData = loadJSON("assets/data/shakespeare_phrases.json");
  midsummerPoemData = loadJSON("assets/data/midsummer.json");
  poem.quotes = random(poemData.phrases);

  //will select a verse from the midsummer poem
  let randomPuckEnding = random(midsummerPoemData.verses);
  poem.puckEnding = randomPuckEnding;
}
// prompt a window and ask the user for its quote
function addVerse() {
  poem.userVerse = prompt(`You may contribute a verse!`);
}
