// async function FetchJoke() {
//   await fetch(
//     "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319"
//   )
//     .then((responce) => {
//       if (responce.ok) {
//         return responce.json();
//       } else {
//         throw new Error("Filed to fetch data");
//       }
//     })
//     .then((response) => {
//       console.log(response.joke);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// FetchJoke();

// setTimeOut
// setTimeout(fun, 4000);
// function fun() {
//   console.log("Hello");
// }

// CallBack
// function Sum(a, b) {
//   let sum = a + b;
//   fun(sum);
// }

// function fun(value) {
//   console.log(value);
// }

// Sum(10, 10, fun);

// --------> Callback Hell <-----------
function loadingData(CallBack) {
  setTimeout(() => {
    console.log("Loading data");
    CallBack();
  }, 4000);
}

function collectingData(CallBack) {
  setTimeout(() => {
    console.log("Collection data");
    CallBack();
  }, 5000);
}

function approvingData(CallBack) {
  setTimeout(() => {
    console.log("approving Data");
    CallBack();
  }, 2000);
}

function approvedData() {
  console.log("approvedData");
}

// // This function inside a another function than they called 'Callback Hell'
// loadingData(function () {
//   collectingData(function () {
//     approvingData(function () {
//       approvedData();
//     });
//   });
// });
