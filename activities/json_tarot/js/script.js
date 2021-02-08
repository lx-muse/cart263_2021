/*****************

Fortune Teller
A3

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let tarotData = undefined;
let fortune = `No fortune found yet ...`;

// preload()
//
// Description of preload


// see furthuer to load file dynamicly

// try also json api url
// function preload() {
//   tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);

// cors stand for cross origin ressource sharing
// }


// setup()
//
// Description of setup

function setup() {
createCanvas(windowWidth, windowHeight);
}


// draw()
//
// Description of draw()

function draw() {
background(255);
// like a regular object propertie
// let description = tarotData.description;

// get in tarotData object - to first .propertie - the fool is in the array at position 0 -
//
// let firstShadowMeaning = tarotData.tarot_interpretations[0].meanings.shadow[0];

push();
textSize(32);
textAlign(CENTER);
fill(0);
text(fortune, width /2, height / 4);
pop();

}

function mousePressed() {
loadJSON(`assets/data/tarot_interpretations.json`, tarotLoaded);
}

function tarotLoaded(data){
  tarotData = data;
  // gt a random tarot card
  let card = random(tarotData.tarot_interpretations);
  fortune = random(card.fortune_telling);
}
