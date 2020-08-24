function getUserChoice() {
  var selectItems = document.getElementById('selectItems');
  var userDisplay= (selectItems.options[selectItems.selectedIndex].value);
  return userDisplay;
}

function getComputerChoice() {
  let randomNumberComputer = (Math.floor(Math.random() * 3));
  if (randomNumberComputer === 0){
    return 'rock';
  }
  else if (randomNumberComputer === 1){
    return 'paper';
  }
  else if (randomNumberComputer === 2){
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice) {
    return 'It is a tie!';
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'The computer wins!';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'The computer wins!';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'The computer wins!';
  } else {
    return 'User wins!';
  }
}

function play() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();

  document.getElementById('displayComputer').innerText = 'Computer choice: ' + computerChoice;
  document.getElementById('displayUser').innerText = 'User choice: ' + userChoice;
  document.getElementById('displayWinner').innerText = determineWinner(userChoice, computerChoice);
}
   