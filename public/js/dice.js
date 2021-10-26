// generate and confront two random numbers; the highest wins
const buttonToPlay = document.querySelector('.generate-number');
const userResult = document.querySelector('.user-number');
const computerResult = document.querySelector('.roby-number');
const finalResult = document.querySelector('.result');
const buttonToReset = document.querySelector('.reset-game');

const generateRandomNumber = () => {
    // generates and displays user random number
    const userNumber = Math.floor(Math.random() * 6) + 1;
    userResult.innerHTML += ` ${userNumber}`;
    // generates and displays computer random number
    const computerNumber = Math.floor(Math.random() * 6) + 1;
    computerResult.innerHTML += ` ${computerNumber}`;

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

const resetGame = () => {
    userResult.innerHTML = 'Your number is';
    computerResult.innerHTML = 'Roby\'s number is';
    finalResult.style.display = 'none';
    buttonToPlay.classList.remove('inactive');
    buttonToReset.classList.add('inactive');
}

buttonToPlay.onclick = generateRandomNumber;
buttonToReset.onclick = resetGame;