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
            return "It's a Tie";
        case 1:
            return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        case 2:
            return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }

    return "It's a tie";
}