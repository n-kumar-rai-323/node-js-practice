const QRCode = require("qrcode");
const http = require("http");


http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    QRCode.toDataURL("https://github.com/n-kumar-rai-323", function (err, url) {
      if (err) console.log(err);
      res.end(`<img src = "${url}"/>`);
    });
  })
  .listen(4000);

console.log("Server is running ");
