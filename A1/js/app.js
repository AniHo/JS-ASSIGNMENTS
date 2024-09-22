const singleButton = document.getElementById("ButtonOn") ;
const playerRollText = document.getElementById("playerRollText") ;
const rollResultAi =document.getElementById("rollResultAi") ;

let playerRoll = 0;
let playerAi = 2;

// PROCESSES


singleButton.addEventListener("click", function() {

  getRandomNumberOneToSixForPlayer = showPlayerRollResult ;
  getRandomNumberOneToSixForAi = showAiRollResult;


});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}
function getRandomNumberOneToSixForAi() {
  playerAi = Math.floor(Math.random() * 6) + 1;
}
//View
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}
function showAiRollResult() {
  rollResultAi.innerHTML = playerAi;
}

