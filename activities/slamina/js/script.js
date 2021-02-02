/*****************

Slamina
MC Lariviere

This is an activity in cart 263 presented to Pippin Barr & Dana\


******************/

// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(500, 500);


  if (annyang) {
    let commands = {
      'hello': function() {
        alert(`Howdy!`);
      }
    };
    annyang.addCommands(commands);
    annyang.start();
    console.log('annyang');
  }


}


// draw()
//
// Description of draw()

function draw() {
  background(0);
}


function mousePressed() {
  // responsiveVoice.speak("hello world");

}
