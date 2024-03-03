// ---- Type One of Function
function typeOne(name) {
  console.log("Type one of Funtion- ", name);
}

// Called the function
typeOne("Codie");

// ---- Type two of Funtion
let fun_name = function (a, b) {
  console.log(`sum of ${a} and ${b} is:- ${a + b}`);
};

// Called Funtion
fun_name(10, 20);

// Type three of Funtion(Arrow Funtion)
let sumNumber = (a, b) => {
  let sum = a + b;
  return sum;
};

// Called the funtion
console.log(sumNumber(19, 29));

// ----- Arrays---------
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr[3]);
console.log(arr.length);
