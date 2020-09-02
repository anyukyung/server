const mysql = require('promise-mysql');

const connection = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'yoo'
};

module.exports = mysql.createPool(connection)