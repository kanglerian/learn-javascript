var jumlahAngkot = prompt('Masukan jumlah angkot yg beroperasi:')
var nilaiAwal = 0;

while (lagi === true) {

    while (nilaiAwal <= jumlahAngkot) {
        console.log('Angkot No. ' + nilaiAwal + ' beroperasi dengan baik');
        nilaiAwal++;
        alert('Angkot ' + nilaiAwal + ' Cek!');
    }
}