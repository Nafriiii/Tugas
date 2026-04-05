const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'table.html'));
});

// CREATE
app.post('/add', (req, res) => {
    const { nama, jenis, harga } = req.body;
    const sql = "INSERT INTO makanan (nama, jenis, harga) VALUES (?, ?, ?)";
    db.query(sql, [nama, jenis, harga], (err, result) => {
        if (err) return res.status(500).send(err.message);
        res.send('Data berhasil ditambahkan');
    });
});

app.get('/data', (req, res) => {
    const sql = "SELECT * FROM makanan";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const { nama, jenis, harga } = req.body;
    const sql = "UPDATE makanan SET nama = ?, jenis = ?, harga = ? WHERE id = ?";
    db.query(sql, [nama, jenis, harga, id], (err, result) => {
        if (err) return res.status(500).send(err.message);
        res.send('Data berhasil diupdate');
    });
});

// DELETE
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM makanan WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err.message);
        res.send('Data berhasil dihapus');
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});