/*****************

Project 1 - Night at the Movie - Dead Poets Society mashup
MC Lariviere in cart 263

A program that generates poems with JSON

RiTa text processing librairie
https://rednoise.org/rita/#examples


******************/
// Poem is an object of multiple texts
let poem = {
  userVerse: ` `,
  quotes: ` `,
  puckEnding: ` `,
  icon: undefined,
};
// A full poem inspired by the movie
let midsummerPoem;
// in Json format, loading Shakesperian quotes and Midsummer Nights Dream
let poemData = undefined;
let midsummerPoemData = undefined;

// variables to addVerse
let input, button, greetings;



let pictureData = undefined;
// picture workaround for now.
let possibleIcons;
let iconUrl;



// loading JSON list in variables from constant url
function preload() {
  poemData = loadJSON("assets/data/shakespeare_phrases.json");
  midsummerPoemData = loadJSON("assets/data/midsummer.json");

  // fill an array with images
  let possibleIcons = [
    "assets/images/icon_01.svg",
    "assets/images/icon_02.svg",
    "assets/images/icon_03.svg",
    "assets/images/icon_04.svg",
    "assets/images/icon_05.svg",
    "assets/images/icon_06.svg",
    "assets/images/icon_07.svg",
    "assets/images/icon_08.svg",
  ]
  console.log(possibleIcons);
  let pos = floor(random(possibleIcons.lenght));
  iconUrl = loadImage(possibleIcons[pos]);
  console.log(iconUrl);
}



// Setup Prepares the texts files for processing

function setup() {
  createCanvas(640, 480);
  generatePoem();
  addVerse();
  console.log(poem);

}


// generates a poem once
function generatePoem() {

  poem.quotes = random(poemData.phrases);

  //will select a verse from the midsummer poem
  let randomPuckEnding = random(midsummerPoemData.verses);
  poem.puckEnding = randomPuckEnding;

  poem.icon = iconUrl;

}


// prompt a window and ask the user for its quote
function addVerse() {

  input = createInput(`You may contribute a verse!`);
  input.input(myInputEvent);
  input.position(40, 440);
  input.size(200);


  button = createButton("join");
  button.position(input.x + input.width, 440);
  button.mousePressed(sendUserVerse);
  // poem.userVerse = prompt(`You may contribute a verse!`);
}

function myInputEvent(){
  console.log('you are typing: ', input.value());
}

function sendUserVerse(){

  console.log(input.value());
  poem.userVerse = input.value();
}


// Description of draw()

function draw() {
  background(200);
  image(iconUrl, 25, 100);

  // template string allows to insert variables values
  // join 3 sentences in a rita string
  let mashupPoem = `
  ${poem.userVerse}
  ${poem.quotes}
  ${poem.puckEnding}
  `;

// seperate each words
  let words = RiTa.tokenize(mashupPoem)
  for (let i=0; i < words.length; i++) {
      text(words[i], 50, 50 + i*20);
  }

// draw the words
  push();
  textFont(`cursive`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  // text(mashupPoem, 50, 100);
  pop();


}



// reset poem
function keyPressed() {
  if (key === "c") {
    localStorage.removeItem(`spy-profile-data`);
    console.log("clear");
  }
}
// remember sessionStorage
