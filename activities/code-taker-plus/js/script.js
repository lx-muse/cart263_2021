/*****************

Code Taker
MC Lariviere, cart 263

game stuff
******************/
"use strict";

$(`#solved-dialog`).dialog({
  autoOpen:false,
  buttons: {
    "I know.": function() {
      $(this).dialog(`close`);
    }
  }
});

$(".secret").one('mouseover', function(event) {
  $(this).addClass('found', 500);
  $(this).draggable({
    helper: 'clone'
  });
});

$('#answer').droppable({
  drop: function(event, ui) {
    // catch the letter in a jquery ui object and append its text to the box section
    let letter = ui.draggable.text();
    $(this).append(letter);
    // refers to the ui object (letters).draggable method
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    // check if they got the answer right
    if( $(this).text() === `Theremin`) {
      $(`#solved-dialog`).dialog(`open`); 
    }
  }
});
