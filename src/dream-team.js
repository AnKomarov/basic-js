const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!Array.isArray(members)) {
    return false;
  }
  //const regExpr = /\s+/g;
  const teamName = 
    members.filter(elem => typeof(elem) === 'string')
           .map(elem => elem.trim().slice(0,1).toUpperCase())
           .sort()
           .join('');
  
  return teamName;
};

// function createDreamTeam( members ) {
//   if(!Array.isArray(members)) {
//     return false;
//   }
//   //const regExpr = /\s+/g;
//   const teamName = 
//     members.filter(elem => typeof(elem) === 'string')
//            .map(elem => elem.trim().slice(0,1).toUpperCase())
//            .sort()
//            .join('');
  
//   return teamName;
// }
// console.log(createDreamTeam([' atest', 'btest1']));