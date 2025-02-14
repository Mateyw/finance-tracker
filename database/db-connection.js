const mysql = require('mysql2');

export default function connectToDb() {
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'finance_tracker',
    });

    db.connect((err) => {
        if (err) throw err;
        console.log('MySQL Connected...');
    });
};
