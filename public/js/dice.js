// generate and confront two random numbers; the highest wins

// selects HTML elements
const containerToPlay = document.querySelector('.first-container'); // container which stores the rules of the game
const buttonToPlay = document.querySelector('.generate-number'); // button to be clicked to play
const containerForResults = document.querySelector('.second-container'); // container which stores the results
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

    // checks user number against computer number
    if (userNumber > computerNumber) {
        finalResult.innerHTML = 'You won!';
    } else if (userNumber < computerNumber) {
        finalResult.innerHTML = 'Roby won!';
    } else {
        finalResult.innerHTML = 'Same number! You both won!';
    }

    // hides first container
    containerToPlay.classList.add('inactive');

    // displays results and the button to reset the game
    containerForResults.classList.remove('inactive');

}

// resets all the paramaters
const resetGame = () => {
    userResult.innerHTML = 'Your number is';
    computerResult.innerHTML = 'Roby\'s number is';
    containerForResults.classList.add('inactive');
    containerToPlay.classList.remove('inactive');
}

// adds click event on buttons
buttonToPlay.onclick = generateRandomNumber;
buttonToReset.onclick = resetGame;