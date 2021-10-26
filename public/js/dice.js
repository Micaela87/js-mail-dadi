// generate and confront two random numbers; the highest wins

// selects HTML elements
const buttonToPlay = document.querySelector('.generate-number'); // button to be clicked to play
const userResult = document.querySelector('.user-number'); // div to display user number
const computerResult = document.querySelector('.roby-number'); // div to display computer number
const finalResult = document.querySelector('.result'); // div to display the winner
const buttonToReset = document.querySelector('.reset-game'); // button to reset the game

const generateRandomNumber = () => {

    // generates and displays user random number
    const userNumber = Math.floor(Math.random() * 6) + 1;
    userResult.innerHTML += ` ${userNumber}`;

    // generates and displays computer random number
    const computerNumber = Math.floor(Math.random() * 6) + 1;
    computerResult.innerHTML += ` ${computerNumber}`;

    // displays winner
    finalResult.style.display = 'block';

    // checks user number against computer number
    if (userNumber > computerNumber) {
        finalResult.innerHTML = 'You won!';
    } else if (userNumber < computerNumber) {
        finalResult.innerHTML = 'Roby won!';
    } else {
        finalResult.innerHTML = 'Same number! You both won!';
    }

    // hides buttonToPlay
    buttonToPlay.classList.add('inactive');
    buttonToReset.classList.remove('inactive');
    
}

// resets all the paramaters
const resetGame = () => {
    userResult.innerHTML = 'Your number is';
    computerResult.innerHTML = 'Roby\'s number is';
    finalResult.style.display = 'none';
    buttonToPlay.classList.remove('inactive');
    buttonToReset.classList.add('inactive');
}

// adds click event on buttons
buttonToPlay.onclick = generateRandomNumber;
buttonToReset.onclick = resetGame;