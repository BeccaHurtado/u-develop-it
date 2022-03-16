const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 8080;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'becca123',
        database: 'election'
    },
    console.log('Connected to the election database.')
);
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});