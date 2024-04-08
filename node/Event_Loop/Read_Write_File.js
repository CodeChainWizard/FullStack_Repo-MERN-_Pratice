const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }

  const readFileUsingOldWay = fs.readFileSync("file.txt", "utf-8");
  res.end(readFileUsingOldWay);

  //   const read = fs.createReadStream("file.txt");
  //   read.pipe(res);
});

server.listen(3001, () => {
  console.log("Port running is:- ", 3001);
});
