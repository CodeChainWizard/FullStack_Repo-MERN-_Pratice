function loadingData() {
  return new Promise((res, rej) => {
    console.log("1) Loading Data");
    res();
  }, 2000);
}

function collectionData() {
  return new Promise((res, rej) => {
    console.log("2) Collection Data");
    res();
  }, 2000);
}

function approvingData() {
  return new Promise((res, rej) => {
    console.log("3) Appproving Data");
    res();
  }, 2000);
}

function approvedData() {
  return new Promise((res, rej) => {
    console.log("4) Approved Data");
    res();
  }, 2000);
}

const Calling_Other_Fun = async () => {
  await loadingData()
    .then(await collectionData())
    .catch((err) => console.log(err));
  await approvingData();
  await approvedData();
};

Calling_Other_Fun();
