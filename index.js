function getComputerChoice () {
    let choice = ['rock','paper','scissors'];
    let random = choice[Math.floor(Math.random()*choice.length)]
    return random
}

function getPlayerChoice () {
    let choice =  prompt ('rock paper or scissors?');
    return choice.toLowerCase()
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection== 'rock' && computerSelection == 'paper' ||
    playerSelection == 'scissors' && computerSelection =='rock' ||
    playerSelection == 'paper' && computerSelection == 'scissors') {
    let string = 'You Lose! ' + computerSelection + ' beats ' +playerSelection
       return string
    } else if (playerSelection== 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'scissors' && computerSelection =='paper' ||
    playerSelection == 'paper' && computerSelection == 'rock') {
    let string = 'You Win! ' + playerSelection + ' beats ' +computerSelection
       return string
    } else {
        let string = 'draw';
        return string
    }
}
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))
