// --- Main type of Streams
// Readable Streams
// Writable Streams
// Duplex Streams
// Transform Streams

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }
  // --- old way to read file and print data.
  //   const file = fs.readFileSync("file.txt");
  //   return res.end(file);

  //   const readableString = fs.createReadStream("file.txt");
  //   readableString.on("data", (data) => {
  //     res.write(data);
  //   });
  //   readableString.on("end", () => {
  //     res.write("End");
  //   });

  //   readableString.on("error", (error) => {
  //     console.log(error);
  //     res.statusCode = 500;

  //     res.end("Internal Server Error");
  //   });
  //   return res.end(readableString);

  //---- advance version of stream to read data.
  const readdataSreing = fs.createReadStream("file.txt");
  readdataSreing.pipe(res);
});

server.listen(3000, () => {
  console.log("Port Running is:- ", 3000);
});
