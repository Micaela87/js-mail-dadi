// checks if user input is in array

const userInput = prompt('Enter your email address');

const mailList = ['mario@gmail.com', 'luisa@yahoo.it', 'giuseppe@libero.it'];

let result;

for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === userInput) {
        result = 'You\'re in!';
        break;
    } else {
        result = 'Sorry, you\'re not in the list';
    }
}

console.log(result);