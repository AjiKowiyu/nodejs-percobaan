const mysql = require('mysql2')
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xdb_belajar_database',
})
database.connect()

try {
    let sql = 
    `INSERT INTO karyawan
    (nama, alamat, no_telepon, gol_darah, jenis_kelamin, departemen_id, jabatan_id)
    VALUES
    ('Naruto', 'Jakarta', '081299990000', 'A', 'L', 1, 2)`

    database.query( sql, function(errorSql, hasil) {
        if (errorSql) throw errorSql
        // console.log(hasil)
        if (hasil.affectedRows > 0) {
            console.log(`berhasil insert ${hasil.affectedRows} data`)
        } else {
            console.log(`gagal menambah data`)
        }
    })

    database.end()
} catch (error) {
    console.log(error)
}