/*****************

Project 1 - Night at the Movie - Dead Poets Society mashup
MC Lariviere in cart 263

A program that generates poems with JSON

******************/
let spyProfile = {
  name: `*redacted*`,
  alias: `*redacted*`,
  secretWeapon: `*redacted*`,
  dispatch: `*redacted*`,
  icon: undefined,
};




const OBJECT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/packaging.json`;
const TAROT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const INSTRUMENT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
const GEOGRAPHY_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/sf_neighborhoods.json`;




let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;
let geographyData = undefined;


let pictureData = undefined;


// picture workaround for now.
let possibleIcons;
let iconUrl;



// loading JSON list in variables from constant url
function preload() {
  instrumentData = loadJSON(INSTRUMENT_DATA_URL);
  objectData = loadJSON(OBJECT_DATA_URL);
  tarotData = loadJSON(TAROT_DATA_URL);
  geographyData = loadJSON(GEOGRAPHY_DATA_URL);

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

  // load a profile if there is one
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  // // check password, copy across the properties
  // if (data) {
  //   let password = prompt(`Password!`);
  //   if (password === data.password) {
  //     spyProfile.name = data.name;
  //     spyProfile.alias = data.alias;
  //     spyProfile.secretWeapon = data.secretWeapon;
  //     spyProfile.password = data.password;
  //     spyProfile.dispatch = data.dispatch;
  //     spyProfile.icon = data.icon;
  //   }
    // do something if they got password wrong here with another else

  generateSpyProfile();



}

function handleTheResponse(pictureData) {

  console.log(pictureData);

}


// generate a profile once
function generateSpyProfile() {
  spyProfile.name = prompt(`You may contribute a verse!`);

  // gets a random from instrument second property
  let instrument = random(instrumentData.instruments);

  // template string with a variable to add something to the text
  spyProfile.alias = `The ${instrument}`;

  spyProfile.secretWeapon = random(objectData.packaging);

  // will select from all arrays of cards
  // let card = random(tarotData.tarot_interpretations);
  // spyProfile.password = random(card.keywords);

  console.log(spyProfile);


  //will select from geographical location
  // returns [object Object] or a number
  let location = random(geographyData.neighborhoods);

  console.log(location);
  spyProfile.dispatch = location.name;

  spyProfile.icon = iconUrl;

  // save the profile in localStorage. remember to strignify to turn object into strings
  // using a specific name in storage
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

// Description of draw()

function draw() {
  background(255);
  image(iconUrl, 25, 100);

  // template string allows to insert variables values
  let profile = `*PROFILE*
Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Dispatch: ${spyProfile.dispatch}
`;

  push();
  textFont(`Courier`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(profile, 50, 100);
  pop();

}
// reset spyProfile
function keyPressed() {
  if (key === "c") {
    localStorage.removeItem(`spy-profile-data`);
    console.log("clear");
  }
}
// remember sessionStorage
