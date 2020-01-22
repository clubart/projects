const fs = require('fs'),
    path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        } else {
            const extname = '.' + ext;
            files = files.forEach(file => {
                (path.extname(file) === extname) 
                    return callback(null, file);
                
            });
        }
    });
}