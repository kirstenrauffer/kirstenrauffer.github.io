var main = function() {
$( ".contact-form" ).hide();

$( ".contact" ).click(function() {
  $( ".contact-form" ).fadeIn();
});


$( "form p" ).click(function() {
  $( ".contact-form" ).fadeOut();
});

$( ".send" ).click(function() {
  $( ".contact-form" ).fadeOut();
});
}

$(document).ready(main);  