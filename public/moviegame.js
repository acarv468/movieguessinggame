//Random value assignment
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

var guesses = document.querySelectorAll(".guess");
var randomMovie = "";
var movies = [{"title": "Bourne Supremacy", "video": "bournesupremacy.mp4"}, {"title": "Inception", "video": "inception.mp4"}, {"title": "Lord of the Rings", "video": "lotr.mp4"}, {"title": "Grand Budapest Hotel", "video": "grandbudapest.mp4"}, {"title": "Eternal Sunshine of the Spotless Mind", "video": "eternalsunshine.mp4"}, {"title": "Argo", "video": "argo.mp4"}, {"title": "Snatch", "video": "snatch.mp4"}, {"title": "Rogue One", "video": "rogueone.mp4"}];
var video = document.getElementById("video");
var source = document.createElement("source");

//Choose answer; Select 4 options and display
function createAnswerButtons() {
	var arr = [];
	//Create potential answers
	var tempMovies = movies.slice(movies);
	for (var x = 0; x < 4; x++) {
		var index = Math.floor(Math.random() * tempMovies.length);
		var removed = tempMovies.splice(index, 1);
		arr.push(removed[0]);
	}
	//Select 1 answer out of the 4
	randomMovie = arr.randomElement();
	source.setAttribute("src", randomMovie.video);
	video.appendChild(source);
	//Display potential answers as buttons
	for (var i = 0; i < guesses.length; i++) {
		for(var j = 0; j < movies.length; j++) {
			guesses[i].innerHTML = arr[i].title;
		}
	}
}


//Checking to see if the correct answer was clicked
function checkAnswer() {
	for(var i = 0; i < guesses.length; i++) {
		guesses[i].addEventListener("click", function(){
			var clickedAnswer = this.innerHTML;
			document.getElementById("video").pause();
			if(clickedAnswer === randomMovie.title) {
				document.getElementById("checked").innerHTML = "Correct!";
			} else {
				document.getElementById("checked").innerHTML = "Incorrect!";
			}
		});
	}
}

document.getElementById("start").addEventListener("click", function(){
	document.getElementById("answerField").style.visibility = "visible";
	document.getElementById("start").innerHTML = "Next";
	document.getElementById("checked").innerHTML = "";
	createAnswerButtons();
	checkAnswer();
});

//http://stackoverflow.com/questions/37771282/how-do-i-select-random-values-from-an-array-in-javascript-or-jquery
//https://www.w3schools.com/html/html5_video.asp
//Colt webdev color game
//http://stackoverflow.com/questions/5235145/changing-source-on-html5-video-tag