/*****************

Project 1 - Night at the Movie - Dead Poets Society mashup
MC Lariviere in cart 263

A program that generates poems with JSON

******************/
// Poem is an object of multiple texts
let poem = {
  name: `*redacted*`,
  secretWeapon: `*redacted*`,
  dispatch: `*redacted*`,
  icon: undefined,
};
// A full poem inspired by the movie
let midsummerPoem;
// in Json format
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

// function handleTheResponse(pictureData) {
//   console.log(pictureData);
// }


// generate a poem once
function generatePoem() {

  // // gets a random from instrument second property
  // let instrument = random(instrumentData.instruments);
  // // template string with a variable to add something to the text
  // poem.alias = `The ${instrument}`;

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
User quote: ${poem.name}
${poem.secretWeapon}
${poem.dispatch}
`;

  push();
  textFont(`cursive`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(profile, 50, 100);
  pop();

}


// prompt a window and ask the user for its quote
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
