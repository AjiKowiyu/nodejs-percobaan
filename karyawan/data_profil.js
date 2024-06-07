let nama = 'Fajar'
let alamat = 'Pluit, Jakarta Utara'


function biodata() {
    return `Nama: ${nama}\n Alamat: ${alamat} \n Pekerjaan: Pengusaha`
    
}


module.exports = {
    nama,
    alamat,
    cetakbiodata: biodata()
}