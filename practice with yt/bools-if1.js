//task1

let hour = 18;

if (hour  >= 6 && hour <= 12) {
    console.log("Good Morning!");

}else if(hour >=13 && hour <=17 ) {
    console.log("Good afternoon!");
}else {
    console.log("Good Night!");
}

//task2

let name = "ada";

let currentHour = prompt("Please enter your current time!");

if (currentHour >= 6 && currentHour <= 12) {
    console.log(`Good morning ${name}`)

} else if (currentHour >= 13 && currentHour <= 17) {
    console.log(`Good afternoon ${name}`)

}else {
    console.log(`Good night ${name}`)
}