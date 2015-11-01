var music = document.getElementById('music'); // id for audio element
var duration; // Duration of audio clip
var pButton = document.getElementById('pButton'); // play button

var playhead = document.getElementById('playhead'); // playhead

var timeline = document.getElementById('timeline'); // timeline
// timeline width adjusted for playhead
var timelineWidth = 225;

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

//Makes timeline clickable
timeline.addEventListener("click", function (event) {
	moveplayhead(event);
	music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal of the total timelineWidth
function clickPercent(e) {
	return (e.pageX - timeline.offsetLeft) / timelineWidth;
}

// Makes playhead draggable 
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that mouse is moved on mouseUp only when the playhead is released 
var onplayhead = false;
function mouseDown() {
	onplayhead = true;
	window.addEventListener('mousemove', moveplayhead, true);
	music.removeEventListener('timeupdate', timeUpdate, false);
}

// getting input from all mouse clicks
function mouseUp(e) {
	if (onplayhead == true) {
		moveplayhead(e);
		window.removeEventListener('mousemove', moveplayhead, true);
		music.currentTime = duration * clickPercent(e);
		music.addEventListener('timeupdate', timeUpdate, false);
	}
	onplayhead = false;
}


// Moves playhead as user drags
function moveplayhead(e) {
	var newWidth = e.pageX - timeline.offsetLeft;
	if (newWidth >= 0 && newWidth <= timelineWidth) {
		playhead.style.width = newWidth + "px";
	}
	if (newWidth < 0) {
		playhead.style.width= "0px";
	}
	if (newWidth > timelineWidth) {
		playhead.style.width = timelineWidth + "px";
	}
}

// timeUpdate 

// Synchronizes playhead position with current point in audio 
function timeUpdate() {
	var playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.width = playPercent + "px";
	if (music.currentTime == duration) {
		pButton.className = "";
		pButton.className = "play";
	}
}

//Play and Pause
function play() {
	// start music
	if (music.paused) {
		music.play();
		// remove play, add pause
		pButton.className = "";
		pButton.className = "pause";
	} else { // pause music
		music.pause();
		// remove pause, add play
		pButton.className = "";
		pButton.className = "play";
	}
}

// Gets audio file duration
music.addEventListener("canplaythrough", function () {
	duration = music.duration;  
}, false);



