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
