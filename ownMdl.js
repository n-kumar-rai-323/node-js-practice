const lowerCase = (text) => text.toLowerCase();

const upperCase = (text) => text.toUpperCase();

const properCase = (text) =>
  text
    .split(" ")
    .map(
      (word) =>
        word.slice(0, 1).toUpperCase() +
        word.slice(1, word.length - 1).toLowerCase()
    )
    .join(" ");

console.log(lowerCase("NISHAN"));
console.log(upperCase("nishan"));
console.log(properCase("Nishan SHRESTHA"));

module.exports = { lowerCase, upperCase, properCase };
