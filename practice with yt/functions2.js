//task 1

function convertToFahrenheit (degree) {
    fahrenheit = (degree * 9 /5) + 32;
    console.log(fahrenheit);
    return fahrenheit;
}

convertToFahrenheit(25);

//task2

function convertToCelsius (degree) {
    celsius = (degree - 32) * 5 / 9;
    console.log(celsius);
    return celsius;
}

convertToCelsius(86);

//task3
let convertedTemp = ""
function convertTemperature(degrees,unit) {
    if (unit == "C") {
        convertedTemp = convertToFahrenheit(degrees) + "F";
    
    } else {
        convertedTemp = convertToCelsius(degrees) + "C";
    }
    console.log(convertedTemp);
}

convertTemperature(25,"C");
convertTemperature(80,"F");