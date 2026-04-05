<h1 align="center">LAPORAN PRAKTIKUM</h1>
<h1 align="center">APLIKASI BERBASIS PLATFORM</h1>

<br>

<h2 align="center">TUGAS COTS 7-8</h2>
<h2 align="center">CRUD DATA MAHASISWA</h2>

<br><br>

<h2 align="center">Disusun Oleh :</h2>

<p align="center" style="font-size:28px;">
  <b>Irfan Thoriq Habibi</b><br>
  <b>2311102131</b><br>
  <b>S1 Teknik Informatika - 2023</b>
</p>
<br>
<h2 align="center">Dosen Pengampu :</h2>

<p align="center" style="font-size:28px;">
  <b>Cahyo Prihantoro, S.Kom., M.Eng </b>
</p>
<br>

<br>
<h1 align="center">LABORATORIUM HIGH PERFORMANCE</h1>
<h1 align="center">FAKULTAS INFORMATIKA</h1>
<h1 align="center">UNIVERSITAS TELKOM PURWOKERTO</h1>
<h1 align="center">TAHUN 2026</h1>

<hr>

## 1. Dasar Teori
**HTML** atau HyperText Markup Language merupakan bahasa dasar yang digunakan untuk membangun sebuah web dimana HTML menangani elemen-elemen dasar pada pembangunan sebuah website.<br>

**CSS & Bootstrap** merupakan framework yang membantu memperindah tampilan dari laman web. Aplikasi ini menggunakan Bootstrap 5 melalui CDN untuk mempercepat pengembangan antarmuka web, mencakup pembuatan tabel, tombol, dan form input.<br>

**Pure Node.js** Aplikasi ini dibangun menggunakan Node.js murni tanpa framework tambahan (seperti Express.js). Routing dan penyajian data JSON ditangani langsung menggunakan modul bawaan `http` dan `fs`.<br>

**JQuery & DataTables** jQuery adalah library Javascript yang mempermudah manipulasi DOM. Dalam tugas ini, jQuery digunakan bersama plugin **DataTables** untuk menampilkan, memfilter, dan memanipulasi data mahasiswa dalam bentuk tabel secara dinamis yang bersumber dari API JSON lokal.<br>

## 2. Struktur Direktori
Karena menggunakan pendekatan Pure Node.js, aplikasi ini tidak memerlukan folder `node_modules` ataupun instalasi dependency eksternal.

```text
TUGAS
│
├── public/                # Folder berisi tampilan HTML
│   ├── index.html         # Halaman utama (Input menu)  
│   ├── table.html         # Halaman Daftar Menu (CRUD)
│
│── db.js                  #  koneksi ke database (MYSQL)
│
├── server.js              # File utama Backend (Pure NodeJS & JSON API)
│
├── package.json           # Konfigurasi project
└── README.md              # Dokumentasi aplikasi