// Psuedo Code 

// need an array of questions
// variables are going to be questions 
	// variables within questions are going to be answers

// Start button to initialize the game and the timer 
// Once start button is clicked it will display the quiz and start the timer 
	// This should also hide the Start button

// need to collect the chosen answer within the questions
// need to be able to choose only one answer per question
	// if right needs to be recorded as correct (after time runs up)
	// if wrong needs to be recorded as wrong (after time runs up )

// Once the time runs out it will display the answer stats 


// CURRENT BUGS: starts the quiz timer before hitting start
		// doesnt display results after completing
		// need the start button to be center
		// should probably jumble up answers
		// 
// Used https://www.youtube.com/watch?v=L9CefB-_KgM to help figure this part out
function displayResults() {
	var q1 = document.forms.form.q1.value;
	var q2 = document.forms.form.q2.value;
	var q3 = document.forms.form.q3.value;
	var q4 = document.forms.form.q4.value;
	var q5 = document.forms.form.q5.value;
	var q6 = document.forms.form.q6.value;

// The q variables correspond with the  answer variables [i]
	var questions = [q1, q2, q3, q4, q5, q6];

	var answers = ["c", "d", "d", "d", "d", "d"];

	var points = 0;
	var total = 6;

	for (var i = 0; i < total; i++) {
		if (questions[i] === answers[i]) {
			points = points + 1;
		}
	}
	// Displays the resuslts in the results div
	document.getElementById("Results").innerHTML = "Your scored " + points + " out of 6 points";
};


var timeLeft = 5;
var timerID = null; 


// Function to make quiz appear and start disappear and initiate countdown
function startQuiz() {
	// reassign the var timeid  
	timerID = setInterval(countdown, 1000);
	document.getElementById("quizContainer").style="display:block";
	document.getElementById("button").style="display:none";
	countdown();
}
// function to countdown by however many seconds we would like
function countdown() {
	if(timeLeft == -1) {
		clearTimeout(timerID);
		// Havent made this function yet but we will
		displayResults();
	} else {
		document.getElementById("timer").innerHTML = timeLeft + " second(s) remaining";
		timeLeft--;
	}
};






