function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0)
        return "ROCK";
    else if(choice == 1)
        return "PAPER";
    else
        return "SCISSORS"; 
}

function stringChoiceToNumericChoice(choice) {
    choice = choice.toUpperCase();
    if(choice == "ROCK") {
        return 0;
    }
    else if(choice == "PAPER") {
        return 1;
    }
    else {
        return 2;
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionNumeric = stringChoiceToNumericChoice(playerSelection)
    let computerSelectionNumeric = stringChoiceToNumericChoice(computerSelection);

    let diff = playerSelectionNumeric - computerSelectionNumeric + 3;
    console.log(diff);
    
    switch(diff%3) {
        case 0:
            return "Tie";
        case 1:
            return "User";
        case 2:
            return "Computer";
    }

    return "It's a tie";
}

function game() {
    let playerScore = 0, computerScore = 0;
    for(let i=0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice among rock, paper and scissors");
        let computerSelection = getComputerChoice();

        switch(playRound(playerSelection, computerSelection)) {
            case "Tie":
                console.log("It's a tie!");
                break;
            case "User":
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
                playerScore++;
                break;
            case "Computer":
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
                break;
        }
    }

    if(playerScore == computerScore) {
        return "It's a tie";
    }
    else if(playerScore > computerScore) {
        return "You Win";
    }
    else {
        return "You Lose";
    }
}