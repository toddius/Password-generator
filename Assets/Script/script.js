// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// what needs to be done:
// create a function called generatePassword()
// this function must create a prompt that asks the user -
// how long would you like your password? (min 8/max128)?
// what character types would you like? 
// choices: lowercase, uppercase, numeric, and/or special characters
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
// ```
