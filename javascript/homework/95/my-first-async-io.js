const fs = require('fs');

fs.readFile(process.argv[2], callback);

function callback (err, data) {
    if(!err){        
        let str = data.toString();
        const spl = str.split('\n').length - 1;
        console.log(spl);
    }
}