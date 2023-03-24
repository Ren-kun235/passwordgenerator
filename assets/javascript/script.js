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
  "*",
  "-",
  "_",
  "=",
  "+",
  ",",
  "<",
  ".",
  ">",
  "?"
]



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// define some arrays of characters such as upperCase/lowerCase/special characters/numbers
// prompts to ask user how many characters (8-128)
// confirm selection of characters being used
// as they confirm, concat selected arrays to new arrays
// create function to fetch a random # and save to a variable(var)
// use that # as index to a new array

// math.Random generates #(s) a randomized number(s) between 0-1
// math.Floor rounds 1.2345 to an integer such as (1)
// newArr[] the # that is in []'s (repeated step)

// var abcd = [] <- brackets define the array wanted.