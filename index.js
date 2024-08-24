// To create http server using node js

const http = require("http");
const fs = require("fs");
const os = require("os");

// logic to check RAM in GB?

const totalMemory = os.totalmem();
const totalMem_kb = totalMemory / 1024;
const totalMem_mb = totalMem_kb / 1024;
const totalMem_gb = totalMem_mb / 1024;
console.log(totalMemory);
console.log(totalMem_kb);
console.log(totalMem_mb);
console.log(totalMem_gb);

//Displya memory size
console.log(
  "total memory:" +
    " " +
    totalMem_gb +
    " " +
    "GB" +
    totalMem_mb +
    " " +
    "MB" +
    totalMem_kb +
    " " +
    "KB and " +
    totalMemory +
    " " +
    "Bytes"
);

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         data: "Hello World!",
//       })
//     );
//   })
//   .listen(8000);
// console.log("Application is running ");
