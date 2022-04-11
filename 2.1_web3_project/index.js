/* ---------------------------------*/
/* CONFIGURATION
/* ---------------------------------*/

// 1. Set up the appropriate configuration
var Web3 = require('web3');
var EthereumTransaction = require('ethereumjs-tx');

// 2. Create connection to blockchain
var web3 = new Web3('HTTP://127.0.0.1:7545');

// 3. Set the sending and receiving addresses for the transaction
var sendingAddress = '0xb9A7eA7C92994978150529138D64fA6B06E27272';
var receivingAddress = '0x9375465945000482B5bD45a91900DE1d06BF61dF';

// 4. Check for balance
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

/* ---------------------------------*/
/* CREATE A TRANSACTION 
/* ---------------------------------*/

// 5. Set up the transaction using the transaction varaibles
var rawTransaction = {
  nonce: 1,
  to: receivingAddress,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: 1000000000000000000,
  data: '',
}

/* ---------------------------------*/
/* SIGN THE TRANSACTION
/* ---------------------------------*/

// 6. Sign the transaction with the HEX value of the private key of the sender
var privateKey = '440491104cddad4d15c3ce524fccc020ac230779b6b98f607f70426ee3edcc3a';
var privateKeySenderHex = Buffer.from(privateKey, 'hex');
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

/* ---------------------------------*/
/* SEND THE TRANSACTION
/* ---------------------------------*/

// 7. Send the serialized signed transaction to the Ethereum network
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);