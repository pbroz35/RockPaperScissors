
//randomly returns 'Rock' 'paper' or 'scissors' on behalf of computer
function getComputerChoice()
{
//Generate random choice
let random=Math.floor(Math.random() * 3);

//Decide which choice based off random number generated
if(random==0)
{
    console.log('Rock!');
}
else if(random==1)
{
    console.log('Paper!');
}
else if(random==2)
{
    console.log('Scissors!');
}
else
{
    console.log('Error generating computer choice.');
}
}

function playerSelection()
{
    let validAnswer=0;
    while(validAnswer=0){
    let playerAnswer=prompt('Rock, paper, scissors?');
    playerAnswer=playerAnswer.toLowerCase();

    console.log(playerAnswer);

    if (playerAnswer== 'rock' | playerAnswer=='paper' | playerAnswer=='scissors')
    {
        console.log(`You've selected ${playerAnswer}!`);
        validAnswer=1;
    }
    else{

        console.log(`You've selected an incorrect input : ${playerAnswer} \nEnter a new answer!`);
    }

}
 
//sreturn playerAnswer;

// return playerAnswer;
}


/*
function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  */