//Write a program that calculates a discount based on the purchase amount. Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

function checkPriceDiscount(price) {
  if (price >= 100) return "Discount is 20%";
  if (price >= 50) return "Discount is 10%";
  return "No discount";
}

console.log(checkPriceDiscount(100)); //Discount is 20%
console.log(checkPriceDiscount(50)); //Discount is 10%
console.log(checkPriceDiscount(10)); //No discount
