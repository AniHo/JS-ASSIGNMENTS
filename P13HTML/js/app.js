//Document Elements
//Looks for "text0"

const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");
//Internal Variables
let score =0;

increaseScoreByOne();
function showStylizedScore(scoreInput) {
  return "Your Score is: " + scoreInput * 100;
}
//Controllers
function increaseScoreByOne() {
  score++
  updateScoreText(score);
}
//View
function updateScoreText(newText) {
  textField0.innerHTML = newText;
}
function updateStatusText(newText) {
  textField0.innerHTML = newText;
}
