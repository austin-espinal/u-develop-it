const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Tenma1234!',
        database: 'election'
    },
    console.log('Connecting to the election database.')
);

module.exports = db;