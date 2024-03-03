console.log("Hello");

function called(text) {
  console.log(`Hello ${text}`);
}

called("CodeChainWizard");

var age = 20;
let val = "This is JS practice";

console.log("Age is:- ", age);
console.log("Value is:- ", val);

// Here, chage a value of variable
var a = "this is first hello";
var a = "this is second hello";
console.log(a);

// When you used let then show an error('Identifier 'a' has already been declared')
let a1 = "here, frist called";
// let a = "here, second called";

// but i need to change a value then this way i change
a1 = "here, second called";
console.log(a1);

// When you used const then you never chaged value of that variables.
const new_const = 10;
// new_const = 11;
console.log(new_const);

// ---------------------
let str = "hello check datatype";
let num = 10;
console.log(typeof str);
console.log(typeof num);

// -----------
let age_check = 20;

if (age_check >= 18) {
  console.log("You are Drive the car");
} else {
  console.log("You can't Drive Car");
}

// -----------
let ch = 5;

switch (ch) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Tow");
    break;
  case 3:
    console.log("Three");
    break;

  default:
    console.log("Enter Valid Number");
    break;
}

// -------------------
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(`Hello ${arr[i]}`);
}

let num_loop = 0;
while (num_loop < 10) {
  console.log("Hello!!");
  num_loop++;
}

let do_num = 0;
do {
  console.log("Do loop");
  do_num++;
} while (do_num < 10);
