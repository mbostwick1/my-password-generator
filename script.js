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

  var lowerCaseOpt = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersOpt = "0123456789";
  var specialCharOpt = "!@#$%^&*()<>/{}[]+=-_~";
  var passwordSet = "";
  var passwordLengthCon = 0;

  // Variables for user character confirms //
  var lowerCaseCon;
  var upperCaseCon;
  var numbersCon;
  var specialCharCon;

  // Variables to confirm at least one choice has been selected //
  var characterCon = false;
  var passwordCon = "";

  // while loop will run until user picks a number between 8 and 128 for password length, also establishing the users entry MUST be a number //
  while (
    passwordLengthCon < 8 ||
    passwordLengthCon > 128 ||
    isNaN(passwordLengthCon) ||
    Number.isInteger(+passwordLengthCon) === false
  ) {
    //Password Length Prompt//
    var passwordLengthCon = prompt(
      "Enter a length of at least 8 characters and no more than 128 characters"
    );

    // If the user selects cancel, display to user in text area they have cancelled and try again. //
    if (passwordLengthCon === null) {
      return "You have cancelled. Please try again!";
    }
    // If user selects number outside of 8 to 128, alerts to select again.
    else {
      if (passwordLengthCon < 8 || passwordLengthCon > 128)
        alert(
          "Your password must be at least 8 and no more than 128 characters! Please try again!"
        );
      // If user selects anything other than a number, alerts user to select a number //
      else if (
        isNaN(passwordLengthCon) ||
        Number.isInteger(+passwordLengthCon) === false
      )
        alert("You must enter a whole number!");
    }
  }

  // While loop to confirm if the user wants to use lowercase, uppercase, numbers, and/or special characters //

  while (characterCon === false) {
    // Ask user if generator should use lowercase and assign user input to variable //
    lowerCaseCon = confirm("Do you want to use lowercase letters?");
    if (lowerCaseCon) {
      passwordSet += lowerCaseOpt;
    }

    // Asking user if generator should use uppercase and assign user input to variable //
    upperCaseCon = confirm("Do you want to use uppercase letters?");
    if (upperCaseCon) {
      passwordSet += upperCaseOpt;
    }

    // Asking user if generator should use numbers and assign user input to variable //
    numbersCon = confirm("Do you want to use numbers?");
    if (numbersCon) {
      passwordSet += numbersOpt;
    }

    // Asking user if generator should use special characters and assign user input to variable //
    specialCharCon = confirm("Do you want to use special characters?");
    if (specialCharCon) {
      passwordSet += specialCharOpt;
    }
     //The user must select AT LEAST 1 form of variable for password, if none are selected alert user.// 
    if (
      lowerCaseCon === false &&
      upperCaseCon === false &&
      numbersCon === false &&
      specialCharCon === false
    ) {
      alert("You must at least select one character type!");
    }
   
    else {
      characterCon = true;
      // console.log("YAY!");
    }
  }

  // Password variables to incorporate user's input //

  var userCharOpt = passwordSet.length;
  var userPasswordChar;

  // for loop to generate password //

  for (i = 0; i < passwordLengthCon; i++) {
    userPasswordChar = Math.floor(Math.random() * userCharOpt);
    passwordCon += passwordSet[userPasswordChar];
  }
  // The user's generated password is returned and displayed //
  return passwordCon;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
