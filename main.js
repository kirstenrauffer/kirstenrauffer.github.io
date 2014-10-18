var captionList = ['built my own ukulele from scratch!','am a Pokemon master.','attend Rutgers University.','think that you're pretty great.','am a buffalo wing fanatic.','can smell fear.','am a study Computer Science.''];
var caption = caption[Math.round(Math.random()*7)];

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption'); 

   // setInterval(type, 1000);
});

/*
function type() {
    erase();

    caption = caption[Math.round(Math.random()*7)];

    captionEl.html(caption.substr(0, captionLength++));
    if(caption.length < caption.length+1) {
        setTimeout('type()', 100);
    } 
}

function erase(){
    captionEl.html(caption.substr(0, captionLength--));
    if(caption.length >= 0) {
        setTimeout('erase()', 100);
    }
}
*/

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}