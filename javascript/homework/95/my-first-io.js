const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);
let str = buf.toString();
const spl = str.split('\n').length - 1;
console.log(spl);