
function game(){
    let numberOfWin=0;
    let numberOfLoss=0;
    let numberOfDraw=0;

    let oneRoundGameResult;

    for (i=0; i<5;i++){
        oneRoundGameResult = oneRoundGame(playerPlay(),computerPlay());
        if (oneRoundGameResult === 'Win'){
            numberOfWin++;
            console.log("you: " + numberOfWin + ', computer :' + numberOfLoss + ', Draw: ' + numberOfDraw)
        }
        else if (oneRoundGameResult === 'Loss'){
            numberOfLoss++;
            console.log("you: " + numberOfWin + ', computer :' + numberOfLoss + ', Draw: ' + numberOfDraw)

        }else {
            numberOfDraw++;
            console.log("you: " + numberOfWin + ', computer :' + numberOfLoss + ', Draw: ' + numberOfDraw)
        }
    }
    numberOfWin > numberOfLoss ? console.log("you win") : 
    numberOfWin < numberOfLoss ? console.log("you Loss") : console.log("it's draw");

}

function oneRoundGame(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Draw'
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
             (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
             (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')){
                 return 'Win';
             }
    else {
        return 'Loss';
    }
}

function playerPlay(){
    let playerPlay = (prompt('What is your play (Rock, Paper, Scissors)?').toUpperCase());
    let isPromptAciptable = false;

    while (!isPromptAciptable){
        if (playerPlay === 'ROCK' || playerPlay ==='PAPER' || playerPlay === 'SCISSORS'){
            isPromptAciptable = true;
        }else {
            playerPlay = (prompt('not acciptable choice, please choce again (Rock, Paper, Scissors)?').toUpperCase());
        }
        
    }
    return playerPlay; 
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



console.log(game());