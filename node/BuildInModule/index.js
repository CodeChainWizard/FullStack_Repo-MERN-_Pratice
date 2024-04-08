const os = require("os");
const value = os.freemem();
console.log(value);

const value2 = os.hostname();
console.log(value2);

const value3 = os.totalmem();
console.log(value3);

const value4 = os.userInfo();
console.log(value4);
