function loadingData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("1) Loading Data");
      res();
    }, 2000);
  });
}

function collectionData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("2) Collecion Data");
      res();
    }, 2000);
  });
}

function approvd() {
  return new Promise((res, rej) => {
    console.log("3) Approving Data");
    res();
  }, 2000);
}

function approvingData() {
  console.log("4) Approved Data");
}

loadingData().then(collectionData()).then(approvingData()).then(approvd());
