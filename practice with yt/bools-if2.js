//task 2-1
let age = 34

if (age >= 65 || age <= 6) {
    console.log("You are eligible for a discount!")

} else {
    console.log("You are not eligible for discount!")
}

//task 2-2 (2-1 with prompt and holiday)

let yourAge = prompt("Please enter your age to check your discount status.");
let isHoliday = false

if ((yourAge <= 6 || yourAge >=65) && isHoliday == false) {
    console.log("You are eligible for a discount!");

} else {
    console.log("You are not eligible for discount!");
}