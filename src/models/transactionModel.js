// src/models/transactionModel.js
class Transaction {
    constructor(hash, from, to, value, blockNumber) {
      this.hash = hash;
      this.from = from;
      this.to = to;
      this.value = value;
      this.blockNumber = blockNumber;
    }
  }
  
  module.exports = Transaction;
  