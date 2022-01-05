const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows)=> {
    console.log(rows);
});

//default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});