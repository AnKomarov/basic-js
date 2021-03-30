const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    const val = String(value) === 'undefined' ? '' : String(value);
    this.chainArray.push(`( ${val} )`);
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || !position || !this.chainArray[position]) {
      this.chainArray = [];
      throw new Error('THROWN');
    }
      this.chainArray.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chainArray.join('~~');
    this.chainArray = [];
    return chain;
  }
};

 module.exports = chainMaker;