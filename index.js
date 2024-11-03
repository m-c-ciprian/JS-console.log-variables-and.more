console.log("Hello world!");

// declared variable and then assigned value
let userName;
userName = "Monica";
console.log(userName);
userName = "_monica_";
console.log(userName);

// variable declared and initialized with a value in one line
let email = "user@test.com";
console.log(email);


// constant declared with value
const pi = 3.14;
// pi = 3.12; - re-assignment of values ​​to a constant is prohibited
console.log(pi);


// Arithmetic operations
// sum
const sumResult = 12 + 32;
console.log("sumResult: ", sumResult);

// down
const differenceResult = 33 - 71;
console.log("diferenta: ", differenceResult);

// multiplication
const a = 13;
const b = 44;
const multiplyResult = a * b;
console.log(`rezultat inmultire dintre ${a} si ${b} este ${multiplyResult}`);

// division
const divisionResult = 12 / 5;
console.log("division result: ", divisionResult);

// remaining division (modulo)
const rest = 12 % 5;
console.log("rest impartire: ", rest);


// TYPES OF DATA
// Number
let myNumber = 123;
myNumber = myNumber + 1;
console.log("number: ", myNumber);
console.log("Max safe integer is: ", Number.MAX_SAFE_INTEGER);
console.log("Max number: ", Number.MAX_VALUE);

// BigInt
let bigNumber = 192842198472198472198471894n;
console.log("big number: ", bigNumber); 

// String
let password = "secret";
console.log("password: ", password);

// accessing a character from a string
let secondLetterOfPassword = password[1];
console.log("a doua litera: ", secondLetterOfPassword);

// string concatenation:
let firstName = "Ion";
let lastName = "Ionescu";

let fullName = firstName + " " + lastName;
console.log("full name: ", fullName);

// the length of the string
let myString = "hello people";
let myStringLength = myString.length;

console.log('myString: ', myString);
console.log('length: ', myStringLength);

// string methods
let baseString = "Base";
let upper = baseString.toUpperCase();
let lower = baseString.toLowerCase();
console.log("base: ", baseString);
console.log("uppercase: ", upper);
console.log("lowecase: ", lower);

let substringOfBase = baseString.substring(0, 2);
console.log("substringOfBase: ", substringOfBase);
console.log("substringOfBase.charAt(0) : ", substringOfBase.charAt(0));


// Boolean
let isAuthenticated = true;
let isAuthorized = false;
console.log("isAuthenticated: ", isAuthenticated);
console.log("isAuthorized: ", isAuthorized);

// assignment operators
let x = 12; // declaration and value assignment 12;
console.log("x: ", x);
x += 1; // assignment plus addition
console.log("x: ", x);
x -= 2; // assignment with decrease
console.log("x: ", x);
x *= 2; // assignment with multiplication
console.log("x: ", x);
x /= 3; // assignment with division
console.log("x: ", x);

// equality check
let nameA = "Ana";
let nameB = "Ana";
let nameC = "ana";
console.log("nameA === nameB: ", nameA === nameB);
console.log("nameA === nameC: ", nameA === nameC);

let numberA = 12;
let numberB = 12;
let numberC = 13;
console.log("numberA === numberB: ", numberA === numberB);
console.log("numberA === numberC: ", numberA === numberC);

// inequality check

console.log("nameA !== nameB: ", nameA !== nameB);
console.log("nameA !== nameC: ", nameA !== nameC);


console.log("numberA !== numberB: ", numberA !== numberB);
console.log("numberA !== numberC: ", numberA !== numberC);
