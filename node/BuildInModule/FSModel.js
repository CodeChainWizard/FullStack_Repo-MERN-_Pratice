const fs = require("fs");

fs.readFile("file.txt", "utf-8", (data, err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
  }
});

const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

fs.writeFile("file.txt", "Follow-CodeChainWizard", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

const writeFile = fs.writeFileSync(
  "file1.txt",
  "FollowSync-CodeChianWizard",
  "utf-8"
);
console.log(writeFile);
