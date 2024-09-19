//Document Elements
//Looks for "text0"

const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

const increaseScoreButton  = document.getElementById("button0");
//Internal Variables
let score =0;
let win = false;

increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
});

increaseScoreByOne();

//Controllers
function increaseScoreByOne() {
  score++
}
function checkScoreForSeven() {
  if (score >=7) {
    changeScoreTextColor();
  }
}

//View
function updateScoreText() {
  textField0.innerHTML = "Your score is :" + score;
}
function changeScoreTextColor() {
  textField0.style.color ="green";
}

