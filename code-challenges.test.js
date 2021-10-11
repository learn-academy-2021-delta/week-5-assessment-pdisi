// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("Converts letters to associated numbers and returns them", () => {

    // a test/it method, nested within the describe block, that in plain words, describes what the function does.
    it("Takes in a string and converts specific letters to specific numbers", () => {

      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(input(secretCodeWord1)).toEqual(("L4ck4d41s1c4l"))
      expect(input(secretCodeWord2)).toEqual(("G0bbl3dyg00k"))
      expect(input(secretCodeWord3)).toEqual(("3cc3ntr1c"))
    })
})
// // Test Fail: Input is not defined

// // // b) Create the function that makes the test pass.

// // input a string in an arrow function
// // use replace built in method to swap out letters for numbers
// // return a new string.replace

const input = (string) => {
    return string.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[oO]/g, '0')
 }
 
 var secretCodeWord1 = "Lackadaisical"
//  // Expected output: "L4ck4d41s1c4l"
 var secretCodeWord2 = "Gobbledygook"
//  // Expected output: "G0bbl3dyg00k"
 var secretCodeWord3 = "Eccentric"
//  // Expected output: "3cc3ntr1c"

 //Test Pass

 //Notes on process: I am very happy with the results for this one. It took me a while to figure out how to do it in one line, but it was worth it!


// // --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// // a) Create a test with expects statement using the variable provided.

describe("Return all words that contain a particular letter", () => {

    // a test/it method, nested within the describe block, that in plain words, describes what the function does.
    it("Takes in an array and prints the words that contain specific letters", () => {

      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(input(arrayOfWords1, letterA)).toEqual((["Apple", "Banana", "Orange"]))
      expect(input(arrayOfWords2, letterE)).toEqual((["Cherry", "Blueberry", "Peach"]))
    })
})

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

// //Test Fail: Input is not defined

// // // b) Create the function that makes the test pass.
// //Create a generic arrow function called input that takes in an array and string
// //create a variable called output that is equal to filter values from the given array
// //return the value and use a method called include to find if the given variable letter is in the string
// //change the string to uppercase to ensure that capital letters are found
// //return output

const input = (array, string) => {
    let output = array.filter(value => {
        return value.includes(string) ||
        value.includes(string.toUpperCase())
    })
    return output
} 

//Test Pass

//Notes on process: Had some difficulty with this one. I knew that I needed to use the filter method, but it took me a while to find the include method that needed to be used in conjunction with it. Had some help from classmates on Slack to get the include method to work properly.

// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.

describe("Take in an array of numbers and say if it is a full house or not", () => {

    // a test/it method, nested within the describe block, that in plain words, describes what the function does.
    it("Input an array and return if it is true or false", () => {

      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(input(hand1)).toEqual((true))
      expect(input(hand2)).toEqual((false))
      expect(input(hand3)).toEqual((false))
    })
})

//Test Fail: Input is not defined

var hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// // Expected output: false

// // b) Create the function that makes the test pass.

//Create a generic arrow function called input that takes in an array
//Run a for loop to look through the indexes of the given arrays

//First attempt
//Realized that I need a way to store my counts, so I am heading back to the good old GOOGLE
// const input = (array) => {
//     for(i = 0; i < array.length; i++){
//         let value = array[i]
//         if (array.indexOf(value) !== -1) {
//             return true
//         }
//         array.push(value)
//     }
//     return false
// }

//Second attempt
//The pseudocode above relates to this one as well
//I have added in the countObj of x to keep track of duplicate values within the array
//the conditional statement, if, verifies if the stored data within countObj is strictly 3 of a kind and 2 of a kind then returns true or false
const input = (arr) => {
    let countObj = {}
    for(let x of arr){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }

  //Notes on process: The logic behind this one was not too difficult, but I needed to do some extra research to remember how to store values. I believe we have already done an if statement similar to this one, so that was relatively familiar for me.