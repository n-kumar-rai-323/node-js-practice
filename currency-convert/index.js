const CC = require("currency-converter-lt");
const http = require("http");

const converter = (amount, from, to) => {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      const currencyConverter = new CC();
      currencyConverter
        .from(from)
        .to(to)
        .amount(Number(amount))
        .convert()
        .then((response) => {
          res.end(`${amount} ${from} is equal to ${response} ${to}`);
        });
    })
    .listen(41000);
  console.log("App is Running");
};

converter("1", "JPY", "NPR");
