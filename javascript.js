//Initialize variables
let playerAnswer;
let playerChoice
let computerAnswer;
//Program buttons
let playerCount=0;
let computerCount=0;
//Rock Button
const rockButton=document.querySelector('#Rock');

rockButton.addEventListener('click', () => {
    playerAnswer='Rock';
    playerAnswer=playerSelection(playerAnswer);
    computerAnswer=getComputerChoice();
    console.log(`computer picks ${computerAnswer}`);
    playRound(playerAnswer, computerAnswer);
});

//Paper Button
const paperButton=document.querySelector('#Paper');
paperButton.addEventListener('click',()=>{
    playerAnswer='Paper'
    playerAnswer=playerSelection(playerAnswer);
    computerAnswer=getComputerChoice();
    console.log(`computer picks ${computerAnswer}`);
    playRound(playerAnswer, computerAnswer);
});

//Scissors Button
const scissorsButton=document.querySelector('#Scissors');
scissorsButton.addEventListener('click',()=>{
    playerAnswer='Scissors';
    playerAnswer=playerSelection(playerAnswer);
    computerAnswer=getComputerChoice();
    console.log(`computer picks ${computerAnswer}`);
    playRound(playerAnswer, computerAnswer);
});


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
function playerSelection(playerAnswer)
{
    playerAnswer=playerAnswer.toLowerCase();

    console.log(playerAnswer);

    if (playerAnswer== 'rock' | playerAnswer=='paper' | playerAnswer=='scissors') //Check if player entered valid answer.
    {
        console.log(`You've selected ${playerAnswer}!`);
        return playerAnswer;
    }

}

function playRound(playerChoice,computerChoice)
    {
        if(playerChoice==computerChoice)
        {
            console.log('Tie!');
        }
        if(playerChoice=='rock' && computerChoice=='paper')
        {
            console.log('Computer wins!');
            computerCount+=computerCount+1;

        }
        if(playerChoice=='paper' && computerChoice=='rock')
        {
            console.log('Player wins!');
            playerCount+=playerCount+1;

        }
        if(playerChoice=='rock' && computerChoice=='scissors')
        {
            console.log('Player wins!');
            playerCount+=playerCount+1;

        }
        if(playerChoice=='scissors' && computerChoice=='rock')
        {
            console.log('Computer wins!');
            computerCount+=computerCount+1;

        }
        if(playerChoice=='papers' && computerChoice=='scissors')
        {
            console.log('Computer wins!');
            computerCount+=computerCount+1;

        }
        if(playerChoice=='scissors' && computerChoice=='papers')
        {
            console.log('Player wins!');
            playerCount+=playerCount+1;
        }

        //List current results
        console.log(`Player: ${playerCount}\nComputer: ${computerCount}`);

    }



    





