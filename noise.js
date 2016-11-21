$(document).ready( function() {

// play the audio
var playKey = function(letter) {
  var audio = $("#" + letter + "Audio");
  console.log(audio);
  audio[0].play();
  console.log(audio);
};


// on button click of each thing, play the sound.
  $('.instrument').on('click', 'button', function(event) {
    var note = $(this).html();
    console.log(note);
    playKey(note);
  });

// on keypress of each thing, play the sound.
    var keyletter = function(letter) {
      $("body").on('keydown', function(event) {
        if (event.key == letter) {
          playKey(letter);
        }
      });
    };

  // call the keypress for each of the keys.
  // currently only works for lower case letter presses.
  var key_a = keyletter("a");
  var key_b = keyletter("b");
  var key_c = keyletter("c");
  var key_d = keyletter("d");
  var key_e = keyletter("e");
  var key_f = keyletter("f");
  var key_g = keyletter("g");


});
