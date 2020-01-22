const http = require('http');

http.get(process.argv[2], function callback(response) {
    response.on('data', (data) => {
        let str = data.toString();
        console.log(str);
    });
});