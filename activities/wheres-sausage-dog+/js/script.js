/*****************

Where's Sausage Dog
MC Lariviere


This is an activity in cart 263 presented to Pippin Barr & Dana
It was previously explored here: https://github.com/lx-muse/cart253/tree/master/exercice3
Some elements stayed, yet the whole program was rewritten & revised in 2021
I was a little rusty with p5 librairy and made lots of typo
Has it been 16 months already ?!

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/

******************/
"use strict";

//declaring global variables for the whole program
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;
//I understand this layer now
let animalImages = [];
let animals = [];
//variable for our target-image
let sausageDogImage = undefined;
let sausageDog;

let slider;

// preload()
// for loop to load and push animal images in the array
// Using backtick`` means template strings and will +1 to the name, replacing ${i}

function preload() {
  for(let i = 0; i < NUM_ANIMAL_IMAGES; i++){
    let animalImage = loadImage(`assets/images/animals-${i}.png`);
    animalImages.push(animalImage);
  }
  sausageDogImage = loadImage(`assets/images/animals-target.png`);
}


// setup()
//
// for 100 random images at random position

function setup() {
  //fixed windowHeight - height of html title
  createCanvas(windowWidth, windowHeight - 120);
  for(let i = 0; i < NUM_ANIMALS; i++) {
    //from the animal constructor
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    // create an animal from the class
    let animal = new Animal(x, y, animalImage);
    //push the array of animals to create many
    animals.push(animal);
  }
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);

  //setup for difficulty slider (min, max, value, steps)
  let randomVal = random(0, 255);
  slider = createSlider(0, 255, randomVal, 40 );
  slider.position(100, 75);
  slider.style('width', '180px');

}

// draw()
//
// will display the animals

function draw() {
  let val = slider.value();
  background(val, 125, 255);
  //from the array of animals, .length caculates dynamicaly
  for(let i = 0; i < animals.length; i++) {
    //update method from the animal object
    animals[i].update();

  }
  sausageDog.update();
}

function mousePressed (){
  //temporary patchup // DEBUG:
      sausageDog.mousePressed();
      console.log(sausageDog);


}
