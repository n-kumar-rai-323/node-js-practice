const fs = require("fs");

// write a js founction to read the content of the file using fs module
let text = fs.readFileSync("./hello.txt", "utf-8");
text = text.replace("Rai", "Computer");

console.log("creating a new file...");
fs.writeFileSync("vga.txt", text);
