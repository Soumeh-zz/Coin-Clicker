function coinZero() {
	if (localStorage.getItem('coinCounter') == NaN) {
	    localStorage.setItem('coinCounter',0);
	};
	var coinCounter = localStorage.getItem('coinCounter');
	document.getElementById("coinCounter").innerHTML = coinCounter;
};
function coinClicked() {
    var coinCounter = localStorage.getItem('coinCounter');
	localStorage.setItem('coinCounter',++coinCounter);
	document.getElementById("coinCounter").innerHTML = coinCounter;
	var audio = new Audio('pop.ogg');
    audio.play();
};