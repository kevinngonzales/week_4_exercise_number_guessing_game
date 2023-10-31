// parameters - User inputs a number and we need to determine whether they guessed the correct number in this case 8. 
// use while loop, html page with js, prompt, and parseInt()

// returns - keep asking for the user’s guess until they guess the correct number

// examples - account for non-numerical characters and account for user exiting prompt  

// psuedo code - set a constant for the right number which is 8. then we code our function starting with setting a variable for 
// the user's guess. using while loop checking if conditions are true, we start by turning what the user types into the prompt into a variable. 
// starting with an if statement, if the user's exits the prompt we alert and break the loop. then with else if, 
// using isNan() we can check if the user's guess is not a number and if so we alert and break the loop. using another else if we check if the user 
// inputs the correct number and if so, we alert and break the loop. lastly, using else, if user inputs anything other than the right number 
// then we alert and break the loop. lastly we set the button as a variable and attach the function to the button.

const rightNumber = 8;

function guessTheNumber() {
  var userGuess;
  while (true) {
    userGuess = prompt("Type a number.");
    if (userGuess === null) {
        alert("You exited.");
        break;
      } else if (isNaN(userGuess)) {
        alert("Please Enter a Number.")
       userGuess = parseInt(userGuess);
      } else if (userGuess == rightNumber) {
        alert("You guessed correctly.");
        break;
      } else {
        alert("Wrong number.");
      }
     }
    }

let guessButton = document.getElementById("guessButton");
guessButton.addEventListener("click", guessTheNumber);