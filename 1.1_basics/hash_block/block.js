// Import SHA256
const SHA256 = require('crypto-js/sha256');

// Create the Block class
class Block {
  
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }
  
  generateHash() {
    // Use this to create temporary reference to the class object
    let self = this;
    // Return a promise
    return new Promise((resolve, reject) => {
      self.hash = SHA256(JSON.stringify(self));
      resolve(self);
    });
  }
  
}

module.exports = Block;