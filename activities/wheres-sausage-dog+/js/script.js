/*****************

Where's Sausage Dog
MC Lariviere


This is an activity in cart 263 presented to Pippin Barr & Dana
It was previously explored here: https://github.com/lx-muse/cart253/tree/master/exercice3
Some elements stayed, yet the whole program was rewritten for 2021
p5 librairy was a little rusty
Has it been 16 months already ?!

******************/
"use strict";

//declaring global variables for the whole program
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;
//I understand this layer now
let animalImages = [];
let animals = [];

// preload()
// for loop to load and push animal images in the array
// Using backtick`` means template strings and will +1 to the name, replacing ${i}

function preload() {
  for(let i = 0; i < NUM_ANIMAL_IMAGES; i++){
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }
}


// setup()
//
// for 100 random images at random position

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < NUM_ANIMALS; i++) {
    //from the animal constructor
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    // create an animal
    let animal = new Animal(x, y, animalImage);
    //push the array of animals to create many
    animals.push(animal);
  }
}

// draw()
//
// will display the animals

function draw() {
  background(0, 125, 255);
  //from the array of animals
  for(let i = 0; i < animals.length; i++) {
    //update method from the annimal object
    animals[i].update();

  }
}
