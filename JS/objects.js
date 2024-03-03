let Person = {
  name: "CodeChainWizard",
  age: 20,
  fun: function func() {
    console.log("I m Function");
  },
  arr: [10, 20, 30, 40, 50],
};

console.log(Person.name);
console.log(Person.age);
Person.fun();

for (let i = 0; i < Person.arr.length; i++) {
  console.log(Person.arr[i]);
}

// ------Array in Objects

let arr = [
  {
    user: 1,
    name: "CodeChainWizard",
    age: 20,
  },
  {
    user: 2,
    name: "Shubham",
    age: 20,
  },
  {
    user: 3,
    name: "Nisha",
    age: 45,
  },
];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].name);
}
