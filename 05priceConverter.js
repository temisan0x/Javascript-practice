//Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

function ticketPrice(age) {
    if (age < 12) return 5; //0 -11
    if (age >= 12 && age < 18) return 10; //12-17
    if (age >= 18 && age < 60) return 20; //18-59
    if (age >= 60) return 15; //60+
    else return 5;
}

console.log(ticketPrice(-1)); //👀