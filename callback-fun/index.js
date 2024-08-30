// callback fn is a function in which we have passed a function as argument

const children = (result) => {
  console.log(`The sum of 2 numbers is ${result}`);
};

const parent = ({ num1, num2, print }) => {
  const sum = num1 + num2;
  print(sum);
};

parent({ num1: 1, num2: 5, print: children });

// 0-12 good morning fn call
//12- 24 good morning fn cal

const goodMorning = () => {
  console.log("Good Morning");
};

const goodEvening = () => {
  console.log("Good Evening ");
};

const main = ({ first, second }) => {
  const currentTime = new Date().getHours();
  console.log(currentTime);
  if (currentTime >= 12) {
    first();
  } else {
    second();
  }
};

main({ first: goodEvening, second: goodEvening });
