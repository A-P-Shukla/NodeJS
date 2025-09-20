// Generate a random number between 1 and 100
function generaterandomNumber(){
    return Math.floor(Math.random() * 100) +1;
}

// Convert Celcius to Fahrenheit
function celciusToFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

// Export the functions
module.exports = {
    generaterandomNumber,
    celciusToFahrenheit,
};