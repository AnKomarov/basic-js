const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    if( Array.isArray(arr) ) {
      if(arr.length == 0) {arr.push(1)}
      return 1 + Math.max(...arr.map(elem => this.calculateDepth(elem))); 
    } else {return 0}
  }
};
// class DepthCalculator {
//   calculateDepth( arr ) {
//     if( Array.isArray(arr) ) {
//       if(arr.length == 0) {arr.push(1)}
//       return 1 + Math.max(...arr.map(elem => this.calculateDepth(elem))); 
//     } else {return 0}
//   }
// };

// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([[[3]]],[]))