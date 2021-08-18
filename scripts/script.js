
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const winResult = document.querySelector("#win-result");
const drawResult = document.querySelector("#draw-result");
const looseResult = document.querySelector("#loose-result");

let numberOfWin=0;
let numberOfLoss=0;
let numberOfDraw=0;
let numberOfRoundPlayed=0;

rockBtn.addEventListener('click' , () => game("ROCK"));
paperBtn.addEventListener('click' , () => game("PAPER"));
scissorsBtn.addEventListener('click' ,() =>  game("SCISSORS"));




function game(playerSelection){

    oneRoundGame(playerSelection, computerPlay());

    let numberOfRound = 5;


    
    if(numberOfRoundPlayed >= numberOfRound){
        numberOfWin > numberOfLoss ? alert("you win") : 
        numberOfWin < numberOfLoss ? alert("you Loss") : alert("it's draw");

        numberOfWin=0;
        numberOfLoss=0;
        numberOfDraw=0;
        numberOfRoundPlayed=0;

    }
    
    winResult.textContent = numberOfWin;
    drawResult.textContent = numberOfDraw;
    looseResult.textContent =  numberOfLoss;

}

function oneRoundGame(playerSelection, computerSelection){
    numberOfRoundPlayed++;

    if (playerSelection === computerSelection){
        numberOfDraw++;
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
             (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
             (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')){
                numberOfWin++;
             }
    else {
        numberOfLoss++;
    }

}

function playerPlay(){



    /*let playerPlay = (prompt('What is your play (Rock, Paper, Scissors)?').toUpperCase());
    let isPromptAciptable = false;

    while (!isPromptAciptable){
        if (playerPlay === 'ROCK' || playerPlay ==='PAPER' || playerPlay === 'SCISSORS'){
            isPromptAciptable = true;
        }else {
            playerPlay = (prompt('not acciptable choice, please choce again (Rock, Paper, Scissors)?').toUpperCase());
        }
        
    }
    return playerPlay; */


}

function computerPlay(){
    const choiceAsNumber = randomNumber(3);
    return getChoiceAsName(choiceAsNumber);
}

function getChoiceAsName(n){
    switch (n){
        case 1: return 'ROCK';
        case 2: return 'PAPER';
        case 3: return 'SCISSORS';
    }
}



function randomNumber(n = 1){
    return Math.ceil(Math.random()*n);
}



