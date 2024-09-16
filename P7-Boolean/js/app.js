//Output:You are a child: False
//Output:You are a teenager:False
//Output:You are an adult:True

const birthYear = 2000;
const currentYear = 2024;
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);
// Save to a let variable named isChild, when the age is from 0 till 10.
// ageOfPerson <=10.
let isChild = ageOfPerson <=10;

// Save to a let variable isTeenager, when the age is 11 to 17
//ageOfPerson >=11 ageOfPerson <=17.
let isTeenager =  (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to a let variable named isAdult, when the age is 18 or more
// ageOfPerson >=18.
let isAdult = ageOfPerson >= 18;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);


let heightFromGround = 20;
let playerTouchGround = heightFromGround === 0;
let playerHasJetPack = true;

if (playerTouchGround) {
  // Runs when playerTouchGround = true
  console.log("Player is on the ground!");
console.log("Player can jump");
}

else if (playerHasJetPack) {
  // Runs when playerHasJetPack = true
  console.log("Player can Jet Away");
}


else {
  //Runs when playerTouchGround = false && payerHasJetPack= false;
  console.log("Player is not on the ground!");
  console.log("Player cannot jump ");
}
