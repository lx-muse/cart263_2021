/*****************

Project 1 - Night at the Movie - Dead Poets Society mashup
MC Lariviere in cart 263

A program that generates poems with JSON

******************/
let poem = {
  name: `*redacted*`,
  alias: `*redacted*`,
  secretWeapon: `*redacted*`,
  dispatch: `*redacted*`,
  icon: undefined,
};

let midsummerPoem;


const OBJECT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/packaging.json`;
const TAROT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const INSTRUMENT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;


let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;


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

  instrumentData = loadJSON(INSTRUMENT_DATA_URL);
  objectData = loadJSON(OBJECT_DATA_URL);
  tarotData = loadJSON(TAROT_DATA_URL);

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



// Description of setup

function setup() {
  createCanvas(windowWidth, windowHeight);

  // load a data if there is data
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  // // check password, copy across the properties
  // if (data) {
  //   let password = prompt(`Password!`);
  //   if (password === data.password) {
  //     poem.name = data.name;
  //     poem.alias = data.alias;
  //     poem.secretWeapon = data.secretWeapon;
  //     poem.password = data.password;
  //     poem.dispatch = data.dispatch;
  //     poem.icon = data.icon;
  //   }
    // do something if they got password wrong here with another else

  generatePoem();
  addVerse();

}

// function handleTheResponse(pictureData) {
//   console.log(pictureData);
// }


// generate a poem once
function generatePoem() {

  // gets a random from instrument second property
  let instrument = random(instrumentData.instruments);
  // template string with a variable to add something to the text
  poem.alias = `The ${instrument}`;


  poem.secretWeapon = random(poemData.phrases);

  // will select from all arrays of cards
  // let card = random(tarotData.tarot_interpretations);
  // poem.password = random(card.keywords);

  console.log(poem);


  //will select from geographical location
  let location = random(midsummerPoemData.verses);
  poem.dispatch = location;



  poem.icon = iconUrl;

  // save the profile in localStorage. remember to strignify to turn object into strings
  // using a specific name in storage
  localStorage.setItem(`spy-profile-data`, JSON.stringify(poem));
}

// Description of draw()

function draw() {
  background(255);
  image(iconUrl, 25, 100);

  // template string allows to insert variables values
  let profile = `
Name: ${poem.name}
Alias: ${poem.alias}
Secret Weapon: ${poem.secretWeapon}
Dispatch: ${poem.dispatch}
`;

  push();
  textFont(`cursive`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(profile, 50, 100);
  pop();

}

function addVerse(){
  poem.name = prompt(`You may contribute a verse!`);
}

// reset poem
function keyPressed() {
  if (key === "c") {
    localStorage.removeItem(`spy-profile-data`);
    console.log("clear");
  }
}
// remember sessionStorage
