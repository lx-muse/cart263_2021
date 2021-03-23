/*****************

Code Taker
MC Lariviere, cart 263

game stuff
******************/
"use strict";

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
    ui.draggable.dragabble(`disable`);
    ui.dragabble.removeClass(`found`);
  }
});
