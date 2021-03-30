/*****************
cart263-winter2021
Prototype for P2
MC Larivière

This is a program linking jQuery interfaces with p5, and
hydra : ojack Experimental package for running hydra in atom.

Also includes p5.js, support for OSC channels, and for live coding with javascript in general.
https://hydra.ojack.xyz/?sketch_id=marianne_0
https://github.com/ojack/atom-hydra
ojack as an artist: https://c0d3-p03try.neocities.org/

Template mod with Dana help:
`as you can see, it's not important that the Circles are in p5.
the important part is that we are communicating with a JavaScript class`

Pippin's advice on hydra
leverage functions like sin(), cos(), tan(), noise() that produce patterns over time as you vary a variable (like the angle or timestep). Another is using iteration to draw many slightly varied basic shapes (e.g. a for-loop that draws a bunch of lines, each at a slightly diifferent angle)
******************/

"use strict";

// variables for interface
const NUM_CIRCLES = 10;
const NUM_BUTTONS = 10;

// variables of visuals
let circles = [];


function setup() {
  //creates p5 canvas
  let myCanvas = createCanvas(windowWidth, windowHeight/2);
  //places the canvas in a <div>
  //(so you can move the div around if you wish)
  myCanvas.parent("canvasContainer");

  //Generates 10 buttons and their actions
  generateButtons();

  //generate the circles;
  generateCircles();
}

function draw() {
  background(255);

  //display and move the 10 circles
  for(let i = 0; i < circles.length; i++){
    let circle = circles[i];
    circle.move();
    circle.display();
  }
}

function generateButtons(){
  //select the keyboard container
  let $keyboardContainer = $('#keyboardContainer');
  console.log($keyboardContainer);

  for(let i = 0; i<NUM_BUTTONS; i++){
    //create a button with a text inside
    let button = $('<button></button>').text(`Button: ${i}`);
    //set the ID to the index number (could be useful for something else)
    button.attr('id', i );
    //turn it into a Jquety UI button
    button.button();

    ////IMPORTANT PART////
    //add a listener that will perform some action when the button is clicked
    button.click( function( event ) {
      //the default of buttons is to submit a form, which we don't want
      event.preventDefault();

      //We want to change the size of all the circles in our array.
      //I chose the size to be 10 times the button number.
      //so if i click on "button 2", circle size will be 20.
      //you can make it whatever you want.
      for(let j = 0; j < circles.length; j++){
        let circle = circles[j];
        circle.size = i*10;
      }
      //as you can see, it's not important that the Circles are in p5.
      // the important part is that we are communicating with a JavaScript class
    } );
    ///END///

    //add the button to the html
    $keyboardContainer.append(button)
  }
}

//creates 10 circles from the Circle class
function generateCircles(){
  for(let i = 0; i < NUM_CIRCLES; i++){
    let newCircle = new Circle()
    circles.push(newCircle);
  }
}
