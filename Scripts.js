var RandomNumber1 = 0;
var RandomNumber2 = 0;
var previousRandom1 = 0;
var previousRandom2 = 0;

displayRandomNumbers();

/* Return a random number for a given number of digits */
function getRandomNuber(digits){
    var randomNumber = Math.round(Math.random() * digits);
    return randomNumber;
}

/* Validate if anwser is correct */
function validateAnswer (expectedAnswer, actualAnswer){
    if (expectedAnswer == actualAnswer) {
        return "Great buddy!";
    } else {
        return "Sorry dude, Wrong answer!";
    }
}

/* Display 2 random numbers on website for calculation */
function displayRandomNumbers(){
    //Display first random number
    RandomNumber1 = getRandomNuber(100);
    document.getElementsByTagName("td")[0].innerHTML = RandomNumber1;

    //Display Maths operator - More to come....
    var mathsOperator = document.getElementsByTagName("td")[1];
    mathsOperator.innerHTML = "+";

    //Display Second random number
    RandomNumber2 = getRandomNuber(100);
    document.getElementsByTagName("td")[2].innerHTML = RandomNumber2;

}


/* When user presses Submit, catch user input, evaluate and display result */

//get access to the button and set up a click vent handler
var button = document.getElementById("submit");
button.onclick = displayAnswer;

function displayAnswer() {

    // Saving previous result for answer display
    previousRandom1 = RandomNumber1;
    previousRandom2 = RandomNumber2;

    displayRandomNumbers();

    //Calculate expected result
    var expected = previousRandom1 + previousRandom2;

    //Display output to user
    var answerInput = document.getElementById("answer").value;
    var displayDestination = document.getElementsByTagName("h2")[0];
    displayDestination.innerHTML = validateAnswer(expected, answerInput) + " - " + previousRandom1 + "+" + previousRandom2 + " is " + expected + ". Take above next guess?";
    document.getElementById("answer").value = "";

}
