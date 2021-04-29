const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

function transform( arr ) {
  let transformedArr = [];
  let doubleNextFlag = false;
  if(!Array.isArray(arr)) throw new Error('THROWN');

  for(let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        arr.splice(i, 2);
        i--;
        break;
      case '--discard-prev':
        transformedArr.pop();
        break;
      case '--double-next':
        transformedArr.push(arr[i + 1]);
        doubleNextFlag = true;
        break;
      case '--double-prev': 
        transformedArr.push(arr[i - 1]);
        if(doubleNextFlag) transformedArr.push(arr[i - 1]);
        break;
      default: transformedArr.push(arr[i]);

    }
  }
   console.log(transformedArr); 
}

transform([1, 2, 3, 1337, '--double-prev', 4, 5]);

