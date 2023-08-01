//Initialize variables
let computerAnswer;

//Generate computer answer
function getComputerChoice()
{
//Generate random choice
let random=Math.floor(Math.random() * 3);

//Decide which choice based off random number generated
if(random==0)
{
    return computerAnswer='rock';
}
else if(random==1)
{
    return computerAnswer='paper';
}
else if(random==2)
{
    return computerAnswer='scissors';
}

}

//Have player choose an option 
function playerSelection()
{
    // let validAnswer=0;

    // while(validAnswer==0) //while-loop to force user to enter valid input
    // {
    let playerAnswer=prompt('Rock, paper, scissors?');
    playerAnswer=playerAnswer.toLowerCase();

    console.log(playerAnswer);

    if (playerAnswer== 'rock' | playerAnswer=='paper' | playerAnswer=='scissors') //Check if player entered valid answer.
    {
        console.log(`You've selected ${playerAnswer}!`);
        return playerAnswer;

    }

}

function playRound(playerSelection, computerSelection) 
{
    if(playerSelection==computerSelection)
    {
        alert('tie!');
    }    

}

let playerChoice=playerSelection();
let computerChoice=getComputerChoice();

playRound(playerChoice,computerChoice);

playRound(playerChoice,computerChoice)
{

    if(playerChoice=computerChoice)
    {
        console.log('tie!');
    }



}


   
// let rounds=prompt('How many rounds you want to play?');

// for (let i = 0; i <= rounds; i++) 
// {

    
// }



