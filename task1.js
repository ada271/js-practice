// task1-1

let saniye = 1405;
let dakika = 1405/60
let saniye2 = 1405%60

console.log(`${saniye} saniye'nin içide ${Math.round(dakika)} dakika ve ${saniye2} saniye bulunmaktadır`)

//task1-1 with prompt

let seconds = prompt('Please enter seconds')
let minutes = Math.round(seconds / 60)
let seconds2 = seconds%60

console.log(`${seconds} seconds contains ${minutes} minutes and ${seconds2} seconds`)