// coin flip task


//part1
let ranNum = Math.random();

//part2

// if (ranNum < 0.5) {
    
//     console.log("heads");

// } else {
//     console.log("tails");
// }

//part 3

let result = ""
if (ranNum < 0.5) {
    result = "heads";

}else {
    result = "tails";
}

//part 4 
let guess = prompt("Please guess heads or tails.");

if (guess == result) {
    alert("You win!");

} else {
    alert("You lose")
}