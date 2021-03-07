const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sumCats = 0;
  // for(let i = 0; i < matrix.length; i++) {
  //   for(let j = 0; j < matrix[i].length; j++){
  //     // console.log(matrix[i][j]);
  //     if(matrix[i][j] === '^^') {
  //       sumCats += 1;
  //     }
  //   }
  // }
  for (let subArr of matrix) {
    for (let elem of subArr) {
      if(elem === '^^') {
        sumCats += 1;
      }
    }
  }
  return sumCats;
};

// function countCats(matrix) {
//   let sumCats = 0;
//   // for(let i = 0; i < matrix.length; i++) {
//   //   for(let j = 0; j < matrix[i].length; j++){
//   //     // console.log(matrix[i][j]);
//   //     if(matrix[i][j] === '^^') {
//   //       sumCats += 1;
//   //     }
//   //   }
//   // }
//   for (let subArr of matrix) {
//     for (let elem of subArr) {
//       if(elem === '^^') {
//         sumCats += 1;
//       }
//     }
//   }
//   return sumCats;
// }

// console.log(countCats([
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
// ]));


