function multiplyBySelf ( numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}

console.log(multiplyBySelf(4));

function averageTwoNumbers ( FirstNumber, SecondNumber ) {
 let sumOfNumbers = FirstNumber + SecondNumber;
  return sumOfNumbers / 2;
}
console.log(averageTwoNumbers(2, 6));

function welcome( FirstName, LastName ) {

  return "Welcome " + FirstName + " " + LastName;
}

console.log( welcome("Ben", "Ting"));

function getRandomInt() {

  return Math.floor( Math.random() * 3 );

}
console.log( getRandomInt() );

function convertNumbersToLetters(number) {
  if (number === 0) {
    return "A";
  }
  else if (number === 1) {

    return "B";
  }
  else if (number === 2) {
    return "C";
  }
  else if (number === 3) {
    return "You Done";
  }
}
console.log(convertNumbersToLetters (0));
console.log(convertNumbersToLetters (1));
console.log(convertNumbersToLetters (2));
console.log(convertNumbersToLetters(3));

let score = 0;
function evaluateResult(firstNumber, secondNumber ) {
  if (firstNumber === secondNumber) {
    return "Both Numbers Are Equal!";
  }
else if (firstNumber > secondNumber) {
  score++;
  return "First Number Is Greater!";
}
else if (firstNumber < secondNumber) {
  score--;
  return "Second Number Is Greater!";
  }
}
console.log(evaluateResult(10,24));
console.log(score);
