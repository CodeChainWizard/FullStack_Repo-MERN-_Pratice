//----> Proto

// let Person = {
//   fname: "Danecha",
// };
// let Person1 = {
//   lName: "Shubham",
// };

// Person1.__proto__ = Person;
// console.log(Person1);

// Person1 = Object.create(Person);
// console.log(Person1);

// // Change the value of lname Object
// Person1.lName = "Coder Best";
// console.log(Person1);

// function Person(name, age) {
//   let person = Object.create(obj);
//   person.name = name;
//   person.age = age;
//   return person;
// }

// var obj = {
//   value() {
//     console.log(`Hello ${this.name}`);
//   },
// };

// let user = Person("Coder", 20);
// console.log(user.name);
// user.value();

// ------> Prototype

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greed = function () {
  console.log(`Hello ${this.name}`);
};

let user = new Person("Coder", 20);
console.log(user.name);
console.log(user.age);

console.log(Person.prototype);
