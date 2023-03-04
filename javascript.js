//create js variables from html elements
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerScoreText = document.querySelector('#playerScoreText');
const computerScoreText = document.querySelector('#computerScoreText');
const message = document.querySelector('#message');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');


//
let playerSelection;
let computerSelection;
let result;

let playerScore = 0;
let computerScore = 0;
function disableBtn(){
  for(i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].disabled = true;
  }
}


/*/
FOR each button on the screen
ADD event listener for 'click'
each click invokes function:
  play a round
    record player selection
    randomize computer selection
    displays winner
    records current score
button turns unclickable if a player has 5 wins
a victory/defeat message is displayed 
  

*/
choiceBtns.forEach(button => {
  button.addEventListener('click',function(){
  playerSelection = button.textContent;
  computerSelection = getComputerChoice(); 
  result = playRound(playerSelection, computerSelection);
  

  switch (result){
    case "You won the round!":
      playerScore++;
      playerScoreText.style.color = 'green';
      computerScoreText.style.color = 'red';
      break;
    case "You lost the round..":
      computerScore++
      playerScoreText.style.color = 'red';
      computerScoreText.style.color = 'green';
      break;
    default:
      console.log('draw')
      playerScoreText.style.color = '#0D0D0D';
      computerScoreText.style.color = '#0D0D0D';
      break;   
  } 
  dialogue = gameMessages(playerScore,computerScore);
  
  playerText.textContent = `Player: ${playerSelection}`;
  computerText.textContent = `Computer: ${computerSelection}`;
  resultText.textContent = `${result}`;
  playerScoreText.textContent = `You: ${playerScore}`;
  computerScoreText.textContent = `Computer: ${computerScore}`;
  message.textContent = `${dialogue}`;
  playerHand.src = `./images/${this.textContent}.png`;
  computerHand.src = `./images/${computerSelection}.png`;
  
});
});

function getComputerChoice(){
  let choices = ['ROCK', 'PAPER', 'SCISSORS']
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection){
    return "Draw";
  }
  else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' || playerSelection == 'PAPER' && computerSelection == 'ROCK' || playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
    return 'You won the round!';
  }
  else {
    return 'You lost the round..';
  }
}

function gameMessages(playerScore, computerScore){
if(playerScore < 3  && computerScore ==4 ){
  return "Don't give up!";
}
else if(playerScore == 4 && computerScore < 3){
  return "Teach those machines a lesson!"
}
else if(playerScore == 4 && computerScore == 4){
  return "Clutch it for your mom!"
}
else if (playerScore >= 5 && computerScore <5){
  disableBtn();
  return  "You saved mankind from the machines!";
  
}
else if (playerScore < 5 && computerScore >= 5){
  disableBtn();
  return "You failed to save mankind..";
}
else{
  return "Choose wisely..";
}
}






  







/*/function onClickbtn1(){
  let computerSelection = getComputerChoice();
  let playerSelection = 'rock';
  result = playRound(playerSelection, computerSelection);
  if (result == 'tie'){
    console.log('Draw');
  }
   
  else if (result == 'player'){
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    
    
  }
  else {
    console.log(`You lose... ${computerSelection} beats ${playerSelection}`)
    
  }
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection){
    return 'tie';
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper'){
    return 'player';
  }
  else {
    return 'computer';
  }
}






function game(){
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5;){
    let playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
    if ((playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors')){
      continue;
    }
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    if (result == 'tie'){
      console.log('Draw');
      i++;
    }
    else if (result == 'player'){
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
      i++;
    }
    else {
      console.log(`You lose... ${computerSelection} beats ${playerSelection}`)
      computerScore++;
      i++;
    }
  }
  if(playerScore > computerScore){
    console.log('Congratulations, you won!')
  }
  else if (playerScore = computerScore){
    console.log('The game was a tie')
  }
  else{
    console.log('You lost the match.. Try again!')
  }
}
game(); 
*/