const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'recipes',
    password: 'recipes123',
    database: 'recipes'
});

module.exports = pool;