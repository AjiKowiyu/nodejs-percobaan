// panggil modul mysql2 dari node_modules
const mysql = require('mysql2')

// konfigurasi database mysql yg ingin digunakan
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xdb_belajar_database',
})

// menyambungkan atau membuka koneksi
database.connect()

// 
try {
    database.query('SELECT * FROM karyawan', function(error, hasil) {
        if (error) throw error

        // untuk melihat data yg dihasilkan dari syntax sql yg ditulis
        // console.log(hasil)

        // data yg sudah diolah
        for (const i in hasil) {
            let notelp = ''
            if (hasil[i].no_telepon) {
                notelp = hasil[i].no_telepon
            } else {
                notelp = '-'
            }
            console.log(hasil[i].nama + ', No Telp: ' + notelp )
        }
    })
    database.end()
} catch (error) {
    console.log(error)
}