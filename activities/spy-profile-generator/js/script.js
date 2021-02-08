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



// Description of preload

function preload() {


}



// Description of setup

function setup() {
  createCanvas(windowWidth, windowHeight);

  spyProfile.name = prompt(`Identification!`);
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
