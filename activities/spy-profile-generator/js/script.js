/*****************

Spy Pofile Generator
MC Lariviere in cart 263



A program that generates profiles with JSON
******************/
let spyProfile = {
  name: `*redacted*`,
  alias: `*redacted*`,
  secretWeapon: `*redacted*`,
  password: `*redacted*`
};

const OBJECT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/packaging.json`;
const TAROT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const INSTRUMENT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

// loading JSON list in variables from constant url
function preload() {
  instrumentData = loadJSON(INSTRUMENT_DATA_URL);
  objectData = loadJSON(OBJECT_DATA_URL);
  tarotData = loadJSON(TAROT_DATA_URL);

}



// Description of setup

function setup() {
  createCanvas(windowWidth, windowHeight);

  // load a profile if there is one
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  // copy across the properties
  if(data) {
    spyProfile.name = data.name;
    spyProfile.alias = data.alias;
    spyProfile.secretWeapon = data.secretWeapon;
    spyProfile.password = data.password;
  }
  else {
    generateSpyProfile();
  }
}


// generate a profile once
function generateSpyProfile(){
    spyProfile.name = prompt(`Identification!`);

    // gets a random from instrument second property
    let instrument = random(instrumentData.instruments);
    // template string with a variable to add something to the text
    spyProfile.alias = `The ${instrument}`;

    spyProfile.secretWeapon = random(objectData.packaging);

    // will select from all arrays of cards
    let card = random(tarotData.tarot_interpretations);
    spyProfile.password = random(card.keywords);
    console.log(spyProfile);
    // save the profile in localStorage. remember to strignify to turn object into strings
    // using a specific name in storage
    localStorage.setItem(`spy-profile-data`,JSON.stringify(spyProfile));

}

// Description of draw()

function draw() {
  background(255);

// template string allows to insert variables values
  let profile = `*PROFILE*
Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}`;

  push();
  textFont(`Courier`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(profile, 100, 100);
  pop();
  
}
