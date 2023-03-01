const data = require("./data");
const TOTAL_PARTICIPANTS = data.length;

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const winner = getRandomArbitrary(0, TOTAL_PARTICIPANTS);
console.log(`The Winner is... @${data[winner]}`);