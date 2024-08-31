const { EventEmitter } = require("events");

const event = new EventEmitter();

const myFunction = () => {
  setTimeout(() => {
    console.log("Hellow world");
  }, 2000);
};

event.addListener("chat", myFunction); //create

event.on("chat", () => {
  //listen
  console.log("Someone is typing..");
});

event.emit("chat"); //fire

//write a event to calculate the shipping charges of a product for daraz

const product = {
  name: "Tshirt",
  price: 100,
  shippingRate: 10,
};

const calcuTotal = (item) => {
  const total = item?.price + (item?.shippingRate / 100) * item?.price; //optional chainig
  console.log({ total });
};

event.on("addToCart", () => {
  console.log("Calculating total ammount...");
});

event.addListener("addToCart", (product) => calcuTotal(product));
event.emit("addToCart", product);
