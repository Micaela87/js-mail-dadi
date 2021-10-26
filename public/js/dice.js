// generate and confront two random numbers; the highest wins

const userNumber = Math.floor(Math.random() * 6) + 1;

const computerNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber, computerNumber);

if (userNumber > computerNumber) {
    console.log('You won')
} else if (userNumber < computerNumber) {
    console.log('Computer won')
} else {
    console.log('Same number. Nobody won')
}