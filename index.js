function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choice[Math.floor(Math.random()*choice.length)]
    return randomChoice
}

let score = 0;


function playRound(playerSelection,computerSelection) {
    let result;
    if (playerSelection.toLowerCase()== 'rock' && computerSelection == 'Paper' ||
    playerSelection.toLowerCase() == 'scissors' && computerSelection =='Rock' ||
    playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        result = 'lose';
        score--;
    } else if (playerSelection.toLowerCase()== 'rock' && computerSelection == 'Scissors' ||
    playerSelection.toLowerCase() == 'scissors' && computerSelection =='Paper' ||
    playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock')  {
        result = 'win';
        score++
    } else {
        result = 'draw';
        score == score
    }
   if (result=='lose') {
    let string = 'You Lose! ' + computerSelection + '(computer) beats ' +playerSelection[0].toUpperCase()+playerSelection.substring(1).toLowerCase()+'(player)'
    return string
   } else if (result =='win') {
    let string = 'You Win! ' + playerSelection[0].toUpperCase()+playerSelection.substring(1).toLowerCase() + '(player) beats ' +computerSelection+'(computer)'
    return string
   } else {
    let string = 'Draw! ' +computerSelection+ '(computer) and ' +playerSelection[0].toUpperCase()+playerSelection.substring(1).toLowerCase() + '(player) are the same'
    return string
   }
}

 for (let i=0; i<5; i++) {
    function game() {
        let playerSelection = prompt ('Rock, Paper, or Scissors')
        let computerSelection = getComputerChoice();
        return playRound(playerSelection,computerSelection)
    }
    console.log(game())
 }

 console.log(score)

 if (score>0) {
    overall = 'you are the winner'
 } else if (score<0) {
    overall = 'you are the loser'
 } else {
    overall = 'it is a draw'
 }

 console.log('Match:' +score+ ' ' +overall)




// function getComputerChoice() {
//     let choice = ['Rock','Paper','Scissors'];
//     let random = choice[Math.floor(Math.random()*choice.length)]
//     return random
// }




// // function getPlayerChoice () {
// //     let choice =  prompt ('Rock Paper or Scissors?');
// //     if (choice.toLowerCase()=='rock'||
// //     choice.toLowerCase()=='paper'||
// //     choice.toLowerCase()=='scissors') {
// //     return choice[0].toUpperCase() + choice.substring(1).toLowerCase()
// //     } else {
// //         alert ('Retry')
// //     }
// // }


// //console.log(getPlayerChoice())

// function playRound (playerSelection, computerSelection) {
//     if (playerSelection== 'rock' && computerSelection == 'Paper' ||
//     playerSelection == 'scissors' && computerSelection =='Rock' ||
//     playerSelection == 'paper' && computerSelection == 'Scissors') {
//     let result = 'Lose! '
//     let string = 'You ' +result + computerSelection +  ' beats ' +playerSelection
//        return string
//     } else if (playerSelection== 'rock' && computerSelection == 'Scissors' ||
//     playerSelection == 'scissors' && computerSelection =='Paper' ||
//     playerSelection == 'paper' && computerSelection == 'Rock') {
//     let result = 'Win! '
//     let string = 'You '+result  + playerSelection + ' beats ' +computerSelection
//        return string
//     } else {
//         let result = 'draw'
//         let string = result;
//         return string
//     }
// }
// let playerSelection = 'rock';
// //let computerSelection = getComputerChoice();
// //console.log(playRound(playerSelection, computerSelection))
// function game() {
//     return playRound(playerSelection,getComputerChoice())
// }   


// for (let i = 0; i<5; i++) {
//     getComputerChoice()
//     console.log(game())
// } 
  

