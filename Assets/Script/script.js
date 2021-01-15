// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables
var passwordLength = "";
var lowercaseState = ""; 
var lowercase = "";
var uppercase = "";
var numeric = "";
var specialCharacters = "";
const lowerCaseLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCaseLettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numericalCharsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const specialCharsArr = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]

// create a function called generatePassword() that prompts the user - what character types would you like? 
function generatePassword () {
  // how long would you like your password? (min 8/max128)?
  var passwordLengthSt = window.prompt("How long would you like your password? (min 8/max128)?");
  console.log(passwordLengthSt);

  // convert passwordLength from string to number
 var passwordLengthNum = parseInt(passwordLengthSt);
 console.log(password);

  // make sure the password is the correct length 
 if (passwordLengthNum < 8) {
  window.alert("Your password is not long enough. Try again.");
 
} else if (passwordLengthNum >128) {
  window.alert("Your password is too long. Try again.");
}   else {
  return;
}
  
  // lowercase?
  var lowercaseChoice = window.prompt("Would you like lowercase letters (Y or N)?");
  console.log(lowercase);
  
  if (lowercaseChoice == Y) {
    lowercaseState === "true"; 
  } else if (lowercaseChoice == N) {
    lowercaseState === "false";
  } else {
    window.alert("Invalid inout. Type 'Y' for Yes or 'N' for no.");
  }

  // uppercase?
  var uppercase = window.prompt("Would you like uppercase letters (Y or N)?");
  console.log(uppercase);

  // numeric?
  var numeric = window.prompt("Would you like numeric values (Y or N)?");
  console.log(numeric);

  // special character?
  var specialCharacters = window.prompt("Would you like special characters (Y or N)?");
  console.log(specialCharacters);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// what needs to be done:

// when each type is chosen, it should be validated and AT LEAST one charactertype should be selected
// when all prompts are answered, a password is generated that matches all the selected criteria
// WHEN the password is generated -
// THEN the password is either displayed in an alert or written to the page


// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// 
