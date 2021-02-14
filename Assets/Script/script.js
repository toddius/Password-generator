// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables
var passwordLengthSt ="";
var characterChoices = [];
var passwordArr = [];
var passwordSt = "";
var password = "";
var passwordText = "";
var passwordGen = "";
const lowerCaseLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numericalCharsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialCharsArr = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"];

//character choice check functions
function lowercaseCheck (){
  if (password.match(/[a-z]/g) === false) {
    password = password.split("");
    password = password.pop();
    password = password.push(lowerCaseLettersArr * [Math.floor(Math.random() * (characterChoices.length))]);
    password = password.toString();
  } 

}
function uppercaseCheck (){
  if (password.match(/[A-Z]/g) === false) {
    password = password.split("");
    password = password.pop();
    password = password.push(upperCaseLettersArr * [Math.floor(Math.random() * (characterChoices.length))]);
    password = password.toString();
  } 
}
function numericCheck (){
  if (password.match(/[0-9]/g) === false) {
        password = password.split("");
        password = password.pop();
        password = password.push(numericalCharsArr * [Math.floor(Math.random() * (characterChoices.length))]);
        password = password.toString();
  } 
}
function specialCheck (){
  if (password.match(/[^a-zA-Z\d]/g) === false) {
          password = password.split("");
          password = password.pop();
          password = password.push(specialCharsArr * [Math.floor(Math.random() * (characterChoices.length))]);
          password = password.toString();
  } 
}

// how long would you like your password? (min 8/max128)?
function getPrompts () {
  var passwordLengthSt = window.prompt("How long would you like your password? (min 8 characters/max 128 characters)?");

  // make sure the password is the correct length 
 if (parseInt(passwordLengthSt) < 8) {
  //  generatePassword();
  window.alert("Your password length has too few characters. Try again.");
  return;
 } 
if (parseInt(passwordLengthSt) > 128) {
  //  generatePassword();
  window.alert("Your password length has too many characters. Try again.");
  return;
 } 
 return passwordLengthSt;
}

// create a function called generatePassword() that prompts the user - what character types would you like? 
function generatePassword () {
  var passLength = getPrompts();
  if (!passLength) {
    passLength = getPrompts();
  }
  
  characterChoices = [];
  passwordText = "";
  password = "";
  
  // lowercase character?
  var lowercaseChoice = window.prompt("Would you like lowercase letters (Y or N)?");

  // validate choice
  if (lowercaseChoice == "Y") {
    characterChoices = characterChoices.concat(lowerCaseLettersArr); 
    lowercaseChoice === true; 
  }
  else if (lowercaseChoice !== "N" && lowercaseChoice !== "Y") 
  {
    lowercaseChoice = window.prompt("Invalid input. Type 'Y' for Yes or 'N' for no.");
  } 
  else if (lowercaseChoice == "N"){ 
  } 

  // uppercase character?
  var uppercaseChoice = window.prompt("Would you like uppercase letters (Y or N)?");

  // validate choice
  if (uppercaseChoice == "Y") {
    characterChoices = characterChoices.concat(upperCaseLettersArr); 
    uppercaseChoice === true; 
  } 
  else if (uppercaseChoice !== "N" &&uppercaseChoice !== "Y") 
  {
      uppercaseChoice = window.prompt("Invalid input. Type 'Y' for Yes or 'N' for no.");
  } 
  else if (uppercaseChoice == "N"){    
  }

  // numeric character?
  var numericChoice = window.prompt("Would you like numeric values (Y or N)?");

  // validate choice
  if (numericChoice == "Y") {
    characterChoices = characterChoices.concat(numericalCharsArr); 
    numericChoice === true;
  } 
  else if (numericChoice !== "N" && numericChoice !== "Y") {
      numericChoice = window.prompt("Invalid input. Type 'Y' for Yes or 'N' for no.");
  } 
  else if (numericChoice == "N") {    
  }

  // special character? 
  var specialCharChoice = window.prompt("Would you like special characters (Y or N)?");

  // validate choice
  if (specialCharChoice == "Y") {
    characterChoices = characterChoices.concat(specialCharsArr); 
    specialCharChoice === true;
  } 
  else if (numericChoice !== "N" && numericChoice !== "Y") {
      specialCharChoice = window.prompt("Invalid input. Type 'Y' for Yes or 'N' for no.");
  } 
  else if (specialCharChoice == "N") {
  }

  // create password
  for (i = 0 ; i < parseInt(passLength) ; i++) {
      password = password + characterChoices[Math.floor(Math.random() * (characterChoices.length))];
  }

  // checks if password has at least one of the chosen characters
  if (lowercaseChoice){
    lowercaseCheck();
  }
  if (uppercaseChoice){
    uppercaseCheck();
  }
  if (numericChoice){
    numericCheck();
  }
  if (specialCharChoice){
    specialCheck();
  } 

  return password;
}

// Write password to the #password input
function writePassword() {
  passwordGen = generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = passwordGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
