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

let num = parseInt(prompt("Enter a number"))
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact = i * fact;
}
console.log(fact)

//task8

let x = parseInt(prompt("Enter a value"));
let y = parseInt(prompt("Enter a value"));

if (x >0 && y < 0){
    console.log(4 * x + 2 * y + 4);
} else if (x > 0 && y == 0) {
    console.log(2 * x - y + 3);
} else if(x < 0 && y > 0) {
    console.log(3 * x + 4 * y + 3);
} else{
    console.log("Invalid values for this function!!!")
}


