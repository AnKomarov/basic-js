const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  const strToRepeat = String(str) || '',
        repeatTimes = options.repeatTimes || 1,
        repeatSeparator = options.separator || '+',
        additionStr = options.hasOwnProperty('addition') && String(options.addition) || '',
        additionRepeatTimes = options.additionRepeatTimes || 1,
        additionSeparator = options.additionSeparator || '|';
  
  const repeatedString = `${strToRepeat}${addAdditionStr(additionStr, additionRepeatTimes, additionSeparator)}${repeatSeparator}`.repeat(repeatTimes).slice(0, -repeatSeparator.length);

  function addAdditionStr(additionStr, additionRepeatTimes, additionSeparator) {
    return `${additionStr}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length); 
  }

  return repeatedString;
};
  
// function repeater(str, options) {
//   const strToRepeat = String(str) || '',
//         repeatTimes = options.repeatTimes || 1,
//         repeatSeparator = options.separator || '+',
//         additionStr = options.hasOwnProperty('addition') && String(options.addition) || '',
//         additionRepeatTimes = options.additionRepeatTimes || 1,
//         additionSeparator = options.additionSeparator || '|';
  
//   const repeatedString = `${strToRepeat}${addAdditionStr(additionStr, additionRepeatTimes, additionSeparator)}${repeatSeparator}`.repeat(repeatTimes).slice(0, -repeatSeparator.length);

//   function addAdditionStr(additionStr, additionRepeatTimes, additionSeparator) {
//     return `${additionStr}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length); 
//   }
//   console.log(repeatedString); //TESTstrADD!
// }

// repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!'});