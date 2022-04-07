// Require file system access
const fs = require('fs');

// Read file buffer 
const imgReadBuffer = fs.readFileSync('./test-pattern.jpg')

// Encode image buffer to hex
const imgHexEncode = Buffer.from(imgReadBuffer).toString('hex');

// Output encoded data to console
console.log('imgHexEncode');
console.log(imgHexEncode);

// Decode hex
const imgHexDecode = Buffer.from(imgHexEncode, 'hex');

// Save decoded file file system 
fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);