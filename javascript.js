
function getComputerChoice(){ 
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection){
    return "tie";
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
  playerSelection == 'paper' && computerSelection == 'rock' ||
  playerSelection == 'scissors' && computerSelection == 'paper'){
    return 'player';
  }
  else {
    return 'computer';
  }
}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i<5;){
    
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    if ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")){
      continue;
    }

    let computerSelection = getComputerChoice();
   
    result = (playRound(playerSelection, computerSelection));
    
    if (result == 'tie'){
      console.log('Tie');
      i++;
    }
    else if (result == 'player'){
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
      i++;
    }
    else {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
      i++;
    }
  }
  if (playerScore > computerScore){
    console.log('Congratulations, you won the match!');
  }
  else if (playerScore = computerScore){
    console.log("There are no winners.. Try again");
  }
  else {
    console.log('You lost... Try again!');
    
    
  }
}
game()





