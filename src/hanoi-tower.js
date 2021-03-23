const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  const hanoiObj = {};
  const turns = 2 ** disksNumber - 1;
  const seconds =  Math.trunc(turns / turnsSpeed * 3600);

  hanoiObj.turns = turns;
  hanoiObj.seconds = seconds;
  return hanoiObj;
};

// function calculateHanoi(disksNumber, turnsSpeed) {
//   const hanoiObj = {};
//   const num = 2 ** disksNumber - 1;
//   const seconds =  Math.trunc(num / turnsSpeed * 3600);

//   hanoiObj.turns = num;
//   hanoiObj.seconds = seconds;
//   return hanoiObj;
// }

// console.log(calculateHanoi(5, 4074));