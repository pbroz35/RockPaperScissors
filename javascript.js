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

//initiate counters
let playerCount=0;
let computerCount=0;

//Initiate game
console.log('Welcome to rock, paper, scissors!\nYou are going to play against the computer!');
//let rounds=prompt('How many rounds you want to play?');

//play game
let playerChoice=playerSelection();

    let computerChoice=getComputerChoice();

    playRound(playerChoice,computerChoice);





