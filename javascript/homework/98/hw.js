const app = require('connect')();

app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next();
});

app.use(require('./authorizationMiddleware'));

app.use('/home', (req, res, next) => {
    res.end('<h1>Welcome to PCS!</h1>');
});

app.use('/about', (req, res, next) => {
    res.end('<h1>PCS is a great place!</h1>');
});

app.listen(80);