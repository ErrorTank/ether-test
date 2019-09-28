const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');


//solc.compile params 1: contract src file, 2: contract count
module.exports = solc.compile(source, 1).contracts[':Inbox'];
