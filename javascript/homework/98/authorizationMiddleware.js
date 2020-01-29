const url = require('url');

module.exports = function (req, res, next){
    const parsedUrl = url.parse(req.url, true);
    //req.query = parsedUrl.query;
    if(parsedUrl.query.magicWord === 'please'){
        next();
    }else{
        res.end('<h2>Use your manners if you want to see this page</h2>');
    }
};