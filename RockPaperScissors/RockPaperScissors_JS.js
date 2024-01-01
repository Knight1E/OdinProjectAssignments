function playRound(playerSelection, computerSelection) {
    let roundResult = "NOTHING_YET";
    
    // Lowercasing parameters to make it case insensitive
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();

    console.log("You: " + playerSelection);
    console.log("Computer: " + computerSelection);
    
    if (playerSelection == computerSelection) {
        roundResult = "draw";
    } else if (playerSelection != computerSelection) {
        switch (playerSelection) {
        
            case "rock":
                if (computerSelection == "paper") {
                    roundResult = "loss"; 
                    break;
                } else if (computerSelection == "scissors") {
                    roundResult = "win";
                    break;
                } /*else if (computerSelection == "rock") {
                    roundResult = "draw";
                    break;
                }*/

            case "paper":
                if (computerSelection == "scissors") {
                    roundResult = "loss"; 
                    break;
                } else if (computerSelection == "rock") {
                    roundResult = "win";
                    break;
                } /*else if (computerSelection == "paper") {
                    roundResult = "draw";
                    break;
                }*/

                case "scissors":
                    if (computerSelection == "rock") {
                        roundResult = "loss"; 
                        break;
                    } else if (computerSelection == "paper") {
                        roundResult = "win";
                        break;
                    } /*else if (computerSelection == "scissors") {
                        roundResult = "draw";
                        break;
                    }*/
        }  
    }

    if (roundResult == "win") {
        console.log("Player gained a point!");
        playerPoints += 1;
    } else if (roundResult == "loss") {
        console.log("Computer gained a point...");
        computerPoints += 1;
    } else if (roundResult == "draw") {
        console.log("No one gained any points that round.");
    }

    return roundResult;
  }

function game() {
    console.log("Game starting.")
    for (let i = 1; i < 6; i++) {
        console.log("Round " + i);
        playerSelection = prompt("Make your choice.");
        let computerOptions = ["rock", "paper", "scissors"];
        let randomOption = Math.floor(Math.random() * computerOptions.length);
        computerSelection = computerOptions[randomOption];
        console.log("This round is a... " + playRound(playerSelection, computerSelection));
        console.log("TOTAL POINTS \n------------\nPlayer: " + playerPoints + "\nComputer: "+ computerPoints);

    }

    console.log("And the winner is... ")
    if (playerPoints == computerPoints) {
        console.log("No one, it's a draw.");
    } else if (playerPoints >= computerPoints) {
        console.log("The player, with " + playerPoints + " points! Good job.");
    } else if (playerPoints <= computerPoints) {
        console.log("The computer wins, with " + computerPoints + " points. Better luck next time!");
    }
}

let playerPoints = 0;
let computerPoints = 0;
let playerSelection = "rock";
let computerSelection = "paper";
game();
console.log("TOTAL POINTS \n------------\nPlayer: " + playerPoints + "\nComputer: "+ computerPoints);
