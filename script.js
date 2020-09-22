// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    //Password Length Prompt//
    var passwordLengthCon = prompt("Enter a length of at least 8 characters and no more than 128 characters"); 
  
    if (passwordLengthCon < 8 || passwordLengthCon > 128){
      alert("Your password must be at least 8 characters and no more than 128 characters!")
      }
    //Once established valid length, get different variable confirmations//
    else {
      var lowerCaseCon = confirm("Do you want to use lowercase letters?");
      var upperCaseCon = confirm("Do you want to use uppercase letters?");
      var numbersCon = confirm("Do you want to use numbers?");
      var specialCharactersCon = confirm("Do you want to use special characters?")
  
      }
      //The user must select AT LEAST 1 form of variable for password//
  
    if (lowerCaseCon === false && upperCaseCon === false && numbersCon === false && specialCharactersCon === false){
      alert("You must at least select one character type!")
      }
     else {
       console.log("go to Password function!");
        generatePassword() ;
     }
  
}

function generatePassword() {

var password = "";
var passwordLength = "";

  return "This will be replaced by my generated password"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





