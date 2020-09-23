// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // Variables for all characters options to generate in password//
  var passwordLength = 0;

  var lowerCaseOpt = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersOpt = "0123456789";
  var specialCharOpt = "!@#$%^&*()<>/{}[]+=-_~";
  var passwordSet = "";
  var passwordLength = 0;

  // Variables for user prompts/confirms //
  var lowerCaseCon;
  var upperCaseCon;
  var numbersCon;
  var specialCharCon;

  // Variables to confirm at least one choice has been selected //
  var characterCon = false;
  var passwordCon = "";


  return "This will be replaced by my generated password";
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

