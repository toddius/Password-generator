// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables
var passwordLength ="";
var characterChoices = [];
var passwordArr = [];
var passwordSt = ""
const lowerCaseLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCaseLettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numericalCharsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const specialCharsArr = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]

// create a function called generatePassword() that prompts the user - what character types would you like? 
function generatePassword () {
  // how long would you like your password? (min 8/max128)?
  var passwordLengthSt = window.prompt("How long would you like your password? (min 8 characters/max 128 characters)?");
  console.log(passwordLengthSt);

  // convert passwordLength from string to number
 var passwordLengthNum = parseInt(passwordLengthSt);
 console.log(passwordLengthNum);

  // make sure the password is the correct length 
 if (passwordLengthNum < 8) {
  passwordlengthNum = window.prompt("Your password length has too few characters. Try again.");
 } 
 else if (passwordLengthNum > 128) {
  passwordlengthNum = window.prompt("Your password length has too many characters. Try again.");
 } 
 else {
 }

  // lowercase?
  var lowercaseChoice = window.prompt("Would you like lowercase letters (Y or N)?");
  console.log(lowercaseChoice);

  // validate choice
  if (lowercaseChoice == "Y") {
    characterChoices = characterChoices.concat(lowerCaseLettersArr); 
  } 
  else if (!lowercaseChoice == "N" && !lowercaseChoice == "Y") 
  {
    lowercaseChoice = window.prompt("Invalid input. Type 'Y' for Yes or 'N' for no.");
  } 
  else if (lowercaseChoice == "N"){ 
  } 

  // uppercase?
  var uppercaseChoice = window.prompt("Would you like uppercase letters (Y or N)?");
  console.log(uppercaseChoice);

  // validate choice
  if (uppercaseChoice == "Y") {
    characterChoices = characterChoices.concat(upperCaseLettersArr); 
  } 
  else if (!uppercaseChoice == "N" && !uppercaseChoice == "Y") 
  {
      uppercaseChoice = window.prompt("Invalid input. Type 'Y' for Yes or 'N' for no.");
  } 
  else if (uppercaseChoice == "N"){    
  }

  // numeric?
  var numericChoice = window.prompt("Would you like numeric values (Y or N)?");
  console.log(numericChoice);

  // validate choice
  if (numericChoice == "Y") {
    characterChoices = characterChoices.concat(numericalCharsArr);
  } 
  else if (!numericChoice == "N" && !numericChoice == "Y") {
      numericChoice = window.prompt("Invalid input. Type 'Y' for Yes or 'N' for no.");
  } 
  else if (numericChoice == "N") {    
  }

  // special character?
  var specialCharChoice = window.prompt("Would you like special characters (Y or N)?");
  console.log(specialCharChoice);

  // validate choice
  if (specialCharChoice == "Y") {
    characterChoices = characterChoices.concat(specialCharsArr);
  } 
  else if (!numericChoice == "N" && !numericChoice == "Y") {
      specialCharChoice = window.prompt("Invalid input. Type 'Y' for Yes or 'N' for no.");
  } 
  else if (specialCharChoice == "N") {
  }
  console.log(characterChoices);


  for (i = 0 ; i = passwordLengthNum ; i++) {
      var selectIndex = Math.floor(Math.random() * (characterChoices.length));
      console.log(selectIndex);
      var charChoiceSt = characterChoices[selectIndex];
      passwordArr = passwordArr.push(charChoiceSt);
      // passwordArr = passwordArr.push(characterChoices[selectIndex].toString());
      passwordSt = passwordArr.toString();
      console.log(passwordSt); 
  }
  return passwordSt;
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
