function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0)
        return "ROCK";
    else if(choice == 1)
        return "PAPER";
    else
        return "SCISSORS"; 
}