/*****************

Spy Pofile Generator
MC Lariviere in cart 263



A program that generates profiles with JSON
Flickr also returns JSON list
https://www.flickr.com/services/api/flickr.photos.search.html
******************/
let spyProfile = {
  name: `*redacted*`,
  alias: `*redacted*`,
  secretWeapon: `*redacted*`,
  password: `*redacted*`,
};

const OBJECT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/packaging.json`;
const TAROT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const INSTRUMENT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

// adding a random flower picture (lets try)

let pictureData = undefined;
const PICTURE_DATA_URL = ``;


// personal key brought cors error but a nice JSON file
// http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ae444a7261470da2625374b4c8bf6092&tags=flower&per_page=3&format=json&nojsoncallback=1

// loading JSON list in variables from constant url
function preload() {
  instrumentData = loadJSON(INSTRUMENT_DATA_URL);
  objectData = loadJSON(OBJECT_DATA_URL);
  tarotData = loadJSON(TAROT_DATA_URL);
  pictureData = loadJSON(PICTURE_DATA_URL);
}



// Description of setup

function setup() {
  createCanvas(windowWidth, windowHeight);

  // load a profile if there is one
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  // check password, copy across the properties
  if (data) {
    let password = prompt(`Password!`);
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
    }
    // do something if they got password wrong here with another else
  } else {
    generateSpyProfile();
  }

// https://stackoverflow.com/questions/43703296/use-json-output-from-flickr-to-display-images-from-search
  // setup pictures urls
// let pictureData = JSON.parse(pictureData); //x is the json returned from the url.
//   var _s = pictureData.photos.photo;
//   for (var z = 0; z < pictureData.photos.photo.length; z++) {
//     var CurrentPhotoUrl = 'https://farm' + _s[z]['farm'] + '.staticflickr.com/' + _s[z]['server'] + '/' + _s[z]['id'] + '_' + _s[z]['secret'] + '_n.jpg'
//     console.log(CurrentPhotoUrl);
//
//   }

  console.log("pictureData");
}


// generate a profile once
function generateSpyProfile() {
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
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));

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
