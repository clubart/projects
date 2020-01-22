const bl = require('bl');
const http = require('http');

http.get(process.argv[2], function callback (response){
    response.pipe(bl(function (err, data) { 
        if(!err){        
            let str = data.toString();
            const chars = str.split('').length;
            console.log(chars);
            console.log(str);
        }
    }));
})