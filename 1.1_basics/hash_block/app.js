// Import the block class
const Block = require('./block');

// Create a block object
const block = new Block("Test Block");

// Generate the block hash
block.generateHash().then((result) => {
  console.log(`Block hash: ${result.hash}`);
  console.log(`Block: ${JSON.stringify(result)}`);
}).catch((error) => {console.log(error)});