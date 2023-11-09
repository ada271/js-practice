// lottery game
let compGuess = Math.round(Math.random() * 90 + 10)
console.log(compGuess)

let userNumber= parseInt(prompt('Please enter a number'))

let userNumberDec = Math.trunc(userNumber/10)
let userNumberUnitsDig = userNumber%10


let compGuessDec = Math.floor(compGuess/10)
let compGuessUnitsDig = compGuess%10

console.log(userNumber)
console.log(userNumberDec)
console.log(userNumberUnitsDig)
console.log(compGuessDec)
console.log(compGuessUnitsDig)

if (userNumber == compGuess) {
    alert("Congratulations, you won 10.000$!!!");

}else if(userNumberUnitsDig == compGuessDec && userNumberDec == compGuessUnitsDig){
    alert("Congratulations, you won 5.000$!!!");

}else if(userNumberDec == compGuessUnitsDig || userNumberUnitsDig == compGuessDec || userNumberDec == compGuessDec || compGuessUnitsDig == userNumberUnitsDig) {
    alert("Congratulations, you won 1.000$!!!");

}else
    alert("Sorry you lost!")
