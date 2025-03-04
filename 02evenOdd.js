//Write a program that checks if a number is even or odd.
//using if and else statements

function checkEvenorOdd(number) {
  if (number % 2 === 0) {
    return "even number";
  } else {
    return "odd number";
  }
}

console.log(checkEvenorOdd(3)); // returns odd
console.log(checkEvenorOdd(2)); // returns even
