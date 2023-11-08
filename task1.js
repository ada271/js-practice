// task1-1

let saniye = 1405;
let dakika = 1405/60;
let saniye2 = 1405%60;

console.log(`${saniye} saniye'nin içide ${Math.round(dakika)} dakika ve ${saniye2} saniye bulunmaktadır`);

//task1-1 with prompt

let seconds = prompt('Please enter seconds');
let minutes = Math.round(seconds / 60);
let seconds2 = seconds%60;

// console.log(`${seconds} seconds contains ${minutes} minutes and ${seconds2} seconds`);

//task2 fahrenheit to celsius conversion

let fahrenheit = 120
let celsius = 5 / 9 * (fahrenheit-32);
console.log(`${fahrenheit} fahrenheit equals to ${celsius} celsius degrees`);

// task2 with prompt

let fahr = prompt('Please enter temperature in fahrenheit');
let cels = 5 / 9 * (fahr - 32);
console.log(`${fahr} fahrenheit equals to ${cels} celsius degrees`);

// task3 leap year calc

let year = parseInt(prompt("Please enter a year"))
let isLeap = ( year % 400 == 0 ||  ((year % 4) == 0) && (year %100) != 0);

console.log(`is the year of ${year} a leap year : ${isLeap}`)
