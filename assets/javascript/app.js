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

// UPDATE no more bugs other than Start Button
// OLD BUGS: starts the quiz timer before hitting start
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
	var q7 = document.forms.form.q7.value;
	var q8 = document.forms.form.q8.value;
	var q9 = document.forms.form.q9.value;
	var q10 = document.forms.form.q10.value;

// The q variables correspond with the  answer variables [i]
	var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

	var answers = ["c", "d", "d", "d", "d", "d", "b", "b", "b", "c"];

	var points = 0;
	var total = 10;

	for (var i = 0; i < total; i++) {
		if (questions[i] === answers[i]) {
			points = points + 1;
		}
	}
	// Displays the resuslts in the results div

	document.getElementById("Results").innerHTML = "Your scored " + points + " out of 10 points!";
	document.getElementById("dustin").style.display="block";
	topPage();

};


// // Was going to try and create a function that would create a picture for different scores(happy dustin for above 3 and then sad dustin for under 3 but could not get it to work)
// function choosePic() {
// 	if (points >== 3){
// 		document.getElementById("dustin").style.display="block";
// 	}
// };


var timeLeft = 45;
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
		displayResults();
	} else {
		document.getElementById("timer").innerHTML = timeLeft + " second(s) remaining";
		timeLeft--;
	}
};

// This function will scroll us to the top of the page (going to use that so you will see your score immediately after countdown)
function topPage() {
	document.documentElement.scrollTop = 0;
};





