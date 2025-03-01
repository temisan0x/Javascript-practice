
//Write a program that determines whether a given number is positive or negative.
//using the if and else statements

function checkNumSigns(number) {
    if (number > 0) {
        console.log("The number is positive");
        return "positive";
    } else  if (number < 0){
        console.log("The number is negative");
        return "negative";
    } else {
        console.log("The number is neutral");
        return "neutral";
    }
}

//test case 
checkNumSigns(2); //The number is positive
checkNumSigns(-2); //The number is negative
checkNumSigns(0); //The number is neutral
