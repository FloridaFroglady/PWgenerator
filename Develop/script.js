// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //use empty array to fill with user choices and iterate over to generate password
  charType = [];

  //use empty string to store password
  var password = [];

  //prompt for desired length
  //check that length choice is valid (8-128 characters)

    var char = prompt("How many characters do you wish?");
    
    let minChar = 8;
    let maxChar = 128;
     if (char < minChar || char > maxChar) {
      confirm(
        "Your password must be between 8 and 128 characters.  Please try again."
      );
    } else {
      //prompt returns a string
    Number(char);
    }

    //prompt lowercase
    //generate lowercase from string using random method on indices
    var lower = confirm("Do you wish to include lowercase letters?");
    if (lower) {
      var lowercase = "abcdefghijklmnopqrstuvwxyz";

       password.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
       charType.push(lowercase);
    }

    //prompt uppercase
    //generate uppercase from string using random method on indices
    var upper = confirm("Do you wish to include uppercase letters?");
    if (upper) {
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      password.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
      charType.push(uppercase);
    }

    //prompt numbers
    //generate numbers from string using random method on indices
    var num = confirm("Do you wish to include numbers?");
    if (num) {
      var numbers = "0123456789";
      password.push(numbers[Math.floor(Math.random() * numbers.length)]);
      charType.push(numbers);
    }
    
    //prompt special
    //generate special from string using random method on indices
    var spec = confirm("Do you wish to include special characters?");
    if (spec) {
      var special = "!@#$%^&*()+=_";
      password.push(special[Math.floor(Math.random() * special.length)]);
      charType.push(special);
    }
   

    //validate input--check that entries are valid
    if (!lower && !upper && !num && !spec) {
      alert("You must make at least one choice of character type.");
    }
    //generate password
    for (var i = password.length; i < char; i++) {
      if(charType) {
      var chars = charType.join("").split("")
      chars[Math.floor(Math.random() * char)];
      password.push(chars[i]);
      }
    }
    return password.join("");
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

