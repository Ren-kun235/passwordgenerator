// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]
var upperCase = [ 
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N", 
  "O", 
  "P", 
  "Q", 
  "R", 
  "S", 
  "T", 
  "U", 
  "V", 
  "W", 
  "X",
  "Y", 
  "Z" 
]

var numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
]
var specialChar = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "-",
  "_",
  "=",
  "+",
  "<",
  ".",
  ">",
  "?"
]

var charConfirm = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var result = []
  var request = parseInt(prompt("How many characters would you like your new password to be? (8-128 characters)"))
  console.log(typeof request)

  if (request < 8) {
    alert("Please choose a number between 8-128!")
    return null
  }

  if (request > 128) {
    alert("Please choose a number between 8-128!")
    return null
  }

  if (Number.isNaN(request)) {
    alert("Please choose a NUMBER between 8-128!")
    return null
  }

var lowerConfirm = confirm("Would you like to include lower case letters?");

var upperConfirm = confirm("Would you like to include upper case letters?");

var numberConfirm = confirm("Would you like to include numbers?");

var specialConfirm = confirm("would you like to include special characters?");

console.log(lowerConfirm, upperConfirm, numberConfirm, specialConfirm);

  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    alert("Please select an option!")
    return null
  }

  if (lowerConfirm === true) {
    charConfirm = charConfirm.concat(lowerCase)
  }
  
  if (upperConfirm === true) {
    charConfirm = charConfirm.concat(upperCase)
  }

  if (numberConfirm === true) {
    charConfirm = charConfirm.concat(numbers)
  }

  if (specialConfirm === true) {
    charConfirm = charConfirm.concat(specialChar)
  }
  
  console.log(charConfirm)
  
  for (let index = 0; index < request; index++) {
    var randomValue = Math.floor(Math.random() * charConfirm.length)
    result.push(charConfirm[randomValue])

  }
  console.log(result);

return result.join("")
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// add code to ensure passwords don't chain

// math.Random generates #(s) a randomized number(s) between 0-1
// math.Floor rounds 1.2345 to an integer such as (1)
// newArr[] the # that is in []'s (repeated step)

// var abcd = [] <- brackets define the array wanted.