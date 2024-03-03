class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greed() {
    console.log(`Hello ${this.name}`);
  }
}

let user = new Person("CodeChainWizard", 20);
console.log(user.name);
user.greed();
