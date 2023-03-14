// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//use empty array to fill with user choices and iterate over to generate password
charType = [];

//use empty string to store password
var password = "";


  //prompt for desired length
   //check that length choice is valid (8-128 characters)
  function characters() {
  var char = prompt("How many characters do you wish?");
    if (!char >=8 && !char <= 128) {
      alert("Your password must be between 8 and 128 characters.  Please try again.");
    }else { 
      Number(char);
    }

  //prompt lowercase
  //generate lowercase from string using random method on indices
  var lower=prompt("Do you wish to include lowercase letters?");
    if (lower) {
      charType.push(generateLowercase());
      
    }
  function generateLowercase() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    chosenLowercase =lowercase[Math.floor(Math.random() * lowercase.length)];
  } console.log (chosenLowercase);
  //prompt uppercase
  //generate uppercase from string using random method on indices
  var upper=prompt("Do you wish to include uppercase letters?");
    if (upper) {
      charType.push(generateUppercase());
    }
  function generateUppercase() {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    chosenUppercase=uppercase[Math.floor(Math.random() * uppercase.length)];
  }
  //prompt numbers
  //generate numbers from string using random method on indices
  var num=prompt("Do you wish to include numbers?");
  if (num) {
    charType.push(generateNumbers());
  }
  function generateNumbers() {
    var numbers = "0123456789";
    chosenNumbers=numbers[Math.floor(Math.random() * numbers.length)];
  }
  //prompt special
  //generate special from string using random method on indices
  var spec=prompt("Do you wish to include special characters?");
  if (spec) {
    charType.push(generateSpecial());
  }
  function generateSpecial() {
    var special = "!@#$%^&*()+=_";
    chosenSpecial=[Math.floor(Math.random() * special.length)];
  }

  
  //validate input--check that entries are valid
  if (!lower && !upper && !num && ! spec) {
    alert ("You must make at least one choice of character type.");
  }
  //generate password
    for (var i=0; i < char; i++) {
    chosenCharType = charType[Math.floor(Math.random() * char)];
    password.push(chosenCharType);
    }
  return password;
 
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

