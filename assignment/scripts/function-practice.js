console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, '  + name + '!';
}
// Remember to call the function to test
console.log('Test - should say "Hello, Bruce!"', helloName('Bruce'));

// 3. Function to add two numbers together & return the result

// return firstNumber + secondNumber;
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers);



// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
return firstNumber * secondNumber * thirdNumber;
}
console.log(multiplyThree);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(-3))
console.log(isPositive(8))


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0){
  return undefined;
  } else return array[array.length -1];
}

console.log(getLast(2))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
for (let i = 0; i < array.length; i++){
 if( array[i] == value) {
  return true;
 }
} 
  return false;
}
console.log(find(3,[1,2,3]));
console.log(find(3,[2,4,6]));
console.log(find(3,[3,2,1]));
console.log(find(6,[1,2,3]));
console.log(find(100,[25,50,75,100]));   

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if (string[0]=== letter){
  return true;
} else {
  return false;
  }
}
console.log(isFirstLetter('M', 'McCampbell'));
console.log(isFirstLetter('C', 'Banana'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add item
for (let i =0; i < array.length; i++) {
 sum += array[i];
 }
// TODO: return the sum
  return sum;
}
console.log(sumAll([1, 2, 3]));
console.log(sumAll([4, 9, 6]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(newArray) {
  let positiveNumbers = [];
  for(let i = 0; i < newArray.length; i++){
  if(newArray[i] > 0) {
    positiveNumbers.push(newArray[i]);
  }
  }
return positiveNumbers;
}
console.log(allPositive([1,2,3,4,5]));
console.log('Test - should print "1"', allPositive([1,-2,-3,-4,-5]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
