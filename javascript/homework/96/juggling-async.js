const bl = require('bl');
const http = require('http');

let dataRecieved = 0;
http.get(process.argv[2],process.argv[3], process.argv[4], function callback(response) {
    response.pipe(bl(function (err, data) {
        if (!err) {
            let str = data.toString();
            dataRecieved++;
            if (dataRecieved === 3) {
                console.log(str);
            }
        }
    }));
})