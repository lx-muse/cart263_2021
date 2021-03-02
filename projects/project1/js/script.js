/*****************

Project 1 - Night at the Movie - Dead Poets Society mashup
MC Lariviere in cart 263

A program that generates poems with JSON

******************/
// Poem is an object of multiple texts
let poem = {
  userVerse: `*redacted*`,
  quotes: `*redacted*`,
  puckEnding: `*redacted*`,
  icon: undefined,
};
// A full poem inspired by the movie
let midsummerPoem;
// in Json format, loading Shakesperian quotes and Midsummer Nights Dream
let poemData = undefined;
let midsummerPoemData = undefined;


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
  createCanvas(windowWidth, windowHeight);
  generatePoem();
  addVerse();
  console.log(poem);


  // load a local data if there is data
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  // // check password, copy across the properties
  // if (data) {
  //   let password = prompt(`Password!`);
  //   if (password === data.password) {
  //     poem.name = data.name;
  //     poem.secretWeapon = data.secretWeapon;
  //     poem.password = data.password;
  //     poem.dispatch = data.dispatch;
  //     poem.icon = data.icon;
  //   }
  // do something if they got password wrong here with another else

}


// generates a poem once
function generatePoem() {

  poem.quotes = random(poemData.phrases);

  //will select a verse from the midsummer poem
  let randomPuckEnding = random(midsummerPoemData.verses);
  poem.puckEnding = randomPuckEnding;

  poem.icon = iconUrl;
  // save the profile in localStorage. remember to strignify to turn object into strings
  // using a specific name in storage
  localStorage.setItem(`spy-profile-data`, JSON.stringify(poem));
}


// prompt a window and ask the user for its quote
function addVerse() {
  poem.userVerse = prompt(`You may contribute a verse!`);
}

// Description of draw()

function draw() {
  background(255);
  image(iconUrl, 25, 100);

  // template string allows to insert variables values
  let mashupPoem = `
  User quote: ${poem.userVerse}
  ${poem.quotes}
  ${poem.puckEnding}
  `;

  push();
  textFont(`cursive`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(mashupPoem, 50, 100);
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
