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

// shortest version

let isInList = 'Sorry, you\'re not in the list';

for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === userInput) {
        isInList = 'You\'re in the list!';
    }
}

console.log(isInList);

// version without 'break'

let inList = [];

for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === userInput) {
        inList.push(userInput)
    }
}

if (inList.length > 0) {
    console.log('You\'re in the list');
} else {
    console.log('Sorry, you\'re not in the list');
}