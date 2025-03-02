//Write a program to determine the greater of two numbers (between two numbers). Use both the if/else statement and tenary operator.

function checkTernary(num1, num2) {
  const greater = num1 > num2 ? num1 : num2;
  const lesser = num1 < num2 ? num1 : num2;
  const result = `${greater} is greater than ${lesser}`;
  return result;
}

console.log(checkTernary(6, 2));
