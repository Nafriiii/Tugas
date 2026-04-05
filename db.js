const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@Habibi0305',
    database: 'makanan',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Koneksi database gagal:', err.message);
    } else {
        console.log('Database Connected');
        connection.release();
    }
});

module.exports = db;