// task 1 avg of 3 numbers entered

// let a = parseInt(prompt("please enter a number"))
// let b = parseInt(prompt("please enter a number"))
// let c = parseInt(prompt("please enter a number"))

// let d = (a + b +c) / 3
// alert(`Average of the numbers entered ${d}`)

// task 2 find the type of triangle

// let s1 = parseInt(prompt("Enter the length of side one"))
// let s2 = parseInt(prompt("Enter the length of side two"))
// let s3 = parseInt(prompt("Enter the length of side three"))

// if (s1 == s2 && s2 == s3 && s3 == s1) {
//     alert(`${s1},${s2},${s3} forms a equilateral triangle!`)

// }else if((s1 == s2 && s1 != s3) || (s1 == s3 && s1 != s2) || (s2 == s3 && s2 != s1)) {
//     alert(`${s1},${s2},${s3} forms a isosceles triangle!`)

// }else{
//     alert(`${s1},${s2},${s3} forms a scalene triangle!`)
// }


//task3 grade calc

// let gradeMidterm = parseInt(prompt("Enter your midterm grade."))
// let gradeFinal = parseInt(prompt("Enter your final grade"))

// let totalGrade = (gradeMidterm * 40 / 100) + (gradeFinal * 60 / 100)

// if (totalGrade >= 50 && totalGrade <=100) {
//     alert("Congratulations, you've passed this course")

// } else if((gradeFinal < 0 || gradeFinal > 100) || (gradeMidterm < 0 || gradeMidterm > 100)) {
//     alert("Please enter valid grades!")
// } else {
//     alert("See you again next semester :D")
// }

//task4 for loop

let name = ("Ada") 

for (let i = 0; i <5; i++) {
    console.log(name)
}

// task5 
// let total = 0;
// for (let i = 1; 1 < 100; i++) {
//     total += i;
// }
// console.log(total)

//task6

let a = "";

for (let i = 1; i <= 10; i++) {
    if (i == 10) {
        a = a+i    
    } else {
        a = a+i+","    
    }
}
console.log(a)

// task7

// let num = parseInt(prompt("Enter a number"))
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//     fact = i * fact;
// }
// console.log(fact)

//task8

// let x = parseInt(prompt("Enter a value"));
// let y = parseInt(prompt("Enter a value"));

// if (x >0 && y < 0){
//     console.log(4 * x + 2 * y + 4);
// } else if (x > 0 && y == 0) {
//     console.log(2 * x - y + 3);
// } else if(x < 0 && y > 0) {
//     console.log(3 * x + 4 * y + 3);
// } else{
//     console.log("Invalid values for this function!!!")
// }

// task9 grade conversion from 0-100 to letters

// let score = parseInt(prompt("Please enter your score"))

// if (score <= 100 && score >= 80){
//     console.log(`With your ${score} points you get AA!`);

// } else if(score < 80 && score >= 71){
//     console.log(`With your ${score} points you get BA!`);
// } else if(score < 71 && score >= 63){
//     console.log(`With your ${score} points you get BB!`);
// } else if(score < 63 && score >= 55){
//     console.log(`With your ${score} points you get CB!`);
// } else if(score < 55 && score >= 50){
//     console.log(`With your ${score} points you get CC!`);
// } else if(score < 50 && score >= 45){
//     console.log(`With your ${score} points you get DC!`);
// } else if(score < 45 && score >= 35){
//     console.log(`With your ${score} points you get DD!`);
// } else if(score < 35 && score >= 0){
//     console.log(`With your ${score} points you get FF!`);
// } else {
//     console.log("Please enter a valid grade!")
// }


//task10

// for (let i=1; i <=10; i++) {

//     for(let j=1; j <=10; j++){

//         console.log(i+"*" + j + "=" + (i *j))
//     }
// }

//task 11 hot&cold

// let compNum = parseInt(Math.random() * 101);
// console.log(compNum);
// let userGuess = -1;
// let guessCount = 0;
// while (compNum != userGuess) {
    
//     userGuess = parseInt(prompt("Guess a number"));
//     guessCount++;
    
//     if(compNum == userGuess) {
//         console.log("You won!");
//         console.log(`Attempts : ${guessCount}`);
    
//     } else if (userGuess < compNum) {
//         console.log("Guess higher!");
//     } else {
//         console.log("Guess lower");
//     }
// }

//task 12

// let numEntered = parseInt(prompt("Enter a number"));
// let multipResult = 1;

// while (numEntered !== 0) {
    
//     multipResult = multipResult * numEntered;
//     numEntered = parseInt(prompt("Enter a number"));
// }
// console.log(multipResult)

//task 13

let enteredInt = parseInt(prompt("Please enter a number"))
let primeNums = ""

for (let i = 2; i <= enteredInt; i++){

    let isPrime = true;

    for (let j =2; j < i; j++) {
        if(i % j == 0) {
            isPrime = false;
            break
        }
    }

    if (isPrime == true) {
        primeNums = primeNums + i + " "
    }
}
console.log(primeNums)
