/**

from Bubble Popper by Pippin Barr

Turns the index finger as seen through the webcam into a pin that can pop
a bubble that floats from the bottom of the screen to the top.

Uses:

ml5.js Handpose:
https://learn.ml5js.org/#/reference/handpose

sounds from
https://mixkit.co/free-sound-effects/pop/

*/

"use strict";

// Current state of program
let state = `loading`; // loading, running
// User's webcam
let video;
// The name of our model
let modelName = `Handpose`;
// Handpose object (using the name of the model for clarity)
let handpose;
// The current set of predictions made by Handpose once it's running
let predictions = [];

// The bubble we will be popping
let bubble;
// The pin
let pin = {
  tip: {
    x: undefined,
    y: undefined
  },
  head: {
    x: undefined,
    y: undefined,
    size: 20
  }
};

//to keep track score
let score = 0;
let scoreText = "score 5!";

// sfx
let pop;

/**
Starts the webcam and the Handpose, creates a bubble object
*/
function setup() {
  createCanvas(640, 480);

  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the Handpose model and switch to our running state when it loads
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    // Switch to the running state
    state = `running`;
  });

  // Listen for prediction events from Handpose and store the results in our
  // predictions array when they occur
  handpose.on(`predict`, function(results) {
    predictions = results;
  });

  // Create our basic bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  }

  // prepare for sfx
  soundFormats('mp3', 'ogg');
  pop = loadSound("assets/sounds/pop.mp3");
  pop.stop();
}

/**
Handles the two states of the program: loading, running
*/
function draw() {
  if (state === `loading`) {
    loading();
  }
  else if (state === `running`) {
    running();
  }
}

/**
Displays a simple loading screen with the loading model's name
*/
function loading() {
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}

/**
Displays the webcam.
If there is a hand it outlines it and highlights the tip of the index finger
*/
function running() {
  // Use these lines to see the video feed
  // const flippedVideo = ml5.flipImage(video);
  // image(flippedVideo, 0, 0, width, height);

  // Use this line to just see a navy background. More theatrical!
  background(0, 0, 102);

  // shows the current score of the game
  text(scoreText + "\n" + score, width / 2, height / 4);
  fill(0, 255, 0);
  textSize(32);

  // Check if there currently predictions to display
  if (predictions.length > 0) {
    // If yes, then get the positions of the tip and base of the index finger
    updatePin(predictions[0]);

    // Check if the tip of the "pin" is touching the bubble
    let d = dist(pin.tip.x, pin.tip.y, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      // Pop!
      score++;
      pop.play();
      resetBubble();
    }
    // Display the current position of the pin
    displayPin();
  }

  // Handle the bubble's movement and display (independent of hand detection
  // so it doesn't need to be inside the predictions check)
  moveBubble();
  checkOutOfBounds();
  displayBubble();
  checkScore();
}

/**
Updates the position of the pin according to the latest prediction
*/
function updatePin(prediction) {
  pin.tip.x = prediction.annotations.indexFinger[3][0];
  pin.tip.y = prediction.annotations.indexFinger[3][1];
  pin.head.x = prediction.annotations.indexFinger[0][0];
  pin.head.y = prediction.annotations.indexFinger[0][1];
}

/**
Resets the bubble to the bottom of the screen in a new x position
*/
function resetBubble() {
  bubble.x = random(width);
  bubble.y = height;
}

/**
Moves the bubble according to its velocity
*/
function moveBubble() {
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;
}

/**
Resets the bubble if it moves off the top of the canvas
*/
function checkOutOfBounds() {
  if (bubble < 0) {
    resetBubble();
  }
}

/**
Displays the bubble as a circle
*/
function displayBubble() {
  push();
  noStroke();
  fill(100, 100, 200, 150);
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

/**
Displays the pin based on the tip and base coordinates. Draws
a line between them and adds a red pinhead.
*/
function displayPin() {
  // Draw pin
  push();
  stroke(255);
  strokeWeight(2);
  line(pin.tip.x, pin.tip.y, pin.head.x, pin.head.y);
  pop();

  // Draw pinhead
  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(pin.head.x, pin.head.y, pin.head.size);
  pop();
}

// adds ends screen
function checkScore(){
  if(score === 5){
    background(204,136,0);
    fill(128, 21, 0);
    textSize(32);
    text("Good Job!", width / 2, height / 4);
  }
}
