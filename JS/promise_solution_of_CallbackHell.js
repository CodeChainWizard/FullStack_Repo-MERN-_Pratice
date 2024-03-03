function loadingData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Loading Data");
      res();
    }, 4000);
  });
}

function conformationData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Confromation Data");
      res();
    }, 2000);
  });
}

function approvingData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Approving Data");
      rej("Not Fullfilled");
    }, 2000);
  });
}

function approveData() {
  console.log("Approved Data");
}

// loadingData()
//   .then(conformationData)
//   .then(approvingData)
//   .then(approveData)
//   .catch((err) => console.log(err));

// conformationData();
// approvingData();
// approveData();

async function ex() {
  await loadingData();
  await conformationData();
  await approvingData();
  await approveData();
}

ex().catch((err) => console.log(err));
