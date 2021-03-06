/*****************
cart263-winter2021
Project 2
MC Larivière

This is a program linking jQuery interfaces with p5.js and ocsillators

Template mod with Dana help:
`as you can see, it's not important that the Circles are in p5.
the important part is that we are communicating with a JavaScript class`

Pippin's advice on hydra
leverage functions like sin(), cos(), tan(), noise() that produce patterns over time as you vary a variable (like the angle or timestep). Another is using iteration to draw many slightly varied basic shapes (e.g. a for-loop that draws a bunch of lines, each at a slightly different angle)
******************/

"use strict";

// variables for interface
const NUM_CIRCLES = 5;
const NUM_BUTTONS = 5;

// variables of musical Circles
let circles = [];

//variables for waves
const WAVE_RESOLUTION = 1;
let waves = [];

//variable for Boat
let boat;

// variable for sound c-minor
let notes = [`C`, `D`, `Eb`, `F`, `G`, `Ab`, `Bb`, `C`];

function setup() {
  //creates p5 canvas
  let myCanvas = createCanvas(1000, 1000);
  //places the canvas in a <div>
  //(so you can move the div around if you wish)
  myCanvas.parent("canvasContainer");

  //Generates 10 buttons and their actions
  generateButtons();

  //generate the circles;
  generateCircles();

  //Polite Audio
  userStartAudio();

  //wavy lines
  let y = -120;
  while (y < height) {
    let wave = createWave(0, y);
    waves.push(wave);
    y += 75;
  }


}

function draw() {
  background(255);

  //display and move the 10 circles
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.move();
    circle.bounce();
    circle.display();
  }
  //wavy canvas update
  for (let i = 0; i < waves.length; i++) {
    updateWave(waves[i]);
  }
  //draw a boat once
  generateBoat();
}

function generateButtons() {
  //Example from Dana
  //select the keyboard container
  let $keyboardContainer = $('#keyboardContainer');
  console.log($keyboardContainer);

  for (let i = 0; i < NUM_BUTTONS; i++) {
    //create a button with a text inside
    let button = $('<button></button>').text(`Atom: ${i}`);
    //set the ID to the index number (could be useful for something else)
    button.attr('id', i);
    //turn it into a Jquety UI button
    button.button();

    ////IMPORTANT PART////
    //add a listener that will perform some action when the button is clicked
    button.click(function(event) {
      //the default of buttons is to submit a form, which we don't want
      event.preventDefault();
      //We want to change the size of all the circles in our array.
      //I chose the size to be 10 times the button number.
      //so if i click on "button 2", circle size will be 20.
      //you can make it whatever you want.
      for (let j = 0; j < circles.length; j++) {
        let circle = circles[j];
        circle.size = i * 10;
      }
      //as you can see, it's not important that the Circles are in p5.
      // the important part is that we are communicating with a JavaScript class
      ///END///
      // Dana is a great TA :)
    });
    //add the button to the html
    $keyboardContainer.append(button)
    console.log(button);
  }

}

//creates 10 circles from the Circle class
function generateCircles() {
  let note = random(notes);
  for (let i = 0; i < NUM_CIRCLES; i++) {
    let newCircle = new Circle(note);
    circles.push(newCircle);
  }
}

//seem to create an error if I don't have it!
function userStartAudio() {

}

//drawing a Boat
//x, y, parameter won't pass, neither my move function though
function generateBoat(){
  let angle = random (-2, 2);
  let boat = new Boat(400, 900, angle);
  boat.move();
  boat.display();

  // $boatContainer.append(boat);
  console.log(boat);

}


//Pippin's example from here
// I wanted to switch from functions to OOP
// I understand this https://natureofcode.com/book/chapter-3-oscillation/
function createWave(x, y) {
  return {
    x: x,
    y: y,
    amplitude: 10,
    frequency: random(0.01, 0.025),
    bobAngle: random(TWO_PI),
    bobAmount: random(2, 10),
    flow: random(0, TWO_PI),
    b: random(50, 200),
    //Oscillator
    waveOscillator: new p5.Oscillator(),
    waveNearFreq: 120,
    waveFarFreq: 220,
    waveAmp: 0.1,

  };
    // console.log(waveOscillator);
    // waveOscillator.start();


}

function updateWave(wave) {
  moveWave(wave);
  displayWave(wave);
}

function moveWave(wave) {
  wave.bobAngle += 0.05;
  wave.flow += 0.09;
}

function displayWave(wave) {
  push();
  // Coloring
  noStroke();
  fill(0, 0, wave.b, 50);
  // Draw the wave with vertices
  beginShape();
  // One at the far left and the wave's height
  vertex(0, wave.y);
  let flow = wave.flow;
  // Loop through every horizontal vertex of the wave's shape (across the canvas)
  for (let x = 0; x < width; x += WAVE_RESOLUTION) {
    // Genereate a y for this vertex
    // wave.y is the base level y position of the overall wave
    // sin(wave.bobAngle) * wave.bobAmount makes the wave bob up and down over time
    // sin(flow) * wave.amplitude gives us the basic sinewave form
    let y = wave.y + sin(wave.bobAngle) * wave.bobAmount + sin(flow) * wave.amplitude;
    // Draw the vertex
    vertex(x, y);
    // Increase the flow so that we continue along the sinwave form
    flow += wave.frequency;
  }
  // Draw final vertices at the the bottom right and bottom left
  vertex(width, height);
  vertex(0, height);
  endShape();
  pop();
}
