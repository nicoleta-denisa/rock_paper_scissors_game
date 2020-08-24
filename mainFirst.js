function getUserChoice()  {
    let randomNumberUser = (Math.floor(Math.random() * 3));
    if (randomNumberUser === 0){
        return 'Rock';
    }
    else if (randomNumberUser === 1){
        return 'Paper';
    }
    else if (randomNumberUser === 2){
        return 'Scissors';
    }
}
       
function getComputerChoice() {
    let randomNumberComputer = (Math.floor(Math.random() * 3));
    if (randomNumberComputer === 0){
        return 'Rock';
    }
    else if (randomNumberComputer === 1){
        return 'Paper';
    }
    else if (randomNumberComputer === 2){
        return 'Scissors';
    }
}
       
function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return 'It is a tie!';
    } else if (userChoice === 'Rock' && computerChoice === 'Paper') {
        return 'The computer wins!';
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
        return 'The computer wins!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
        return 'The computer wins!';
    } else {
        return 'User wins!';
    }
}
     
function play() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log('User choice: ' + userChoice);
    console.log('Computer choice: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
play();