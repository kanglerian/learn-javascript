// Membuat Object
// 1. Literal

var mahasiswa1 = {
    nama: "Lerian Febriana",
    umur: 22,
    ips: [3.90, 3.99, 4.00],
    alamat: {
        kp: "Rancageneng",
        kel: "Sukajaya",
        kota: "Tasikmalaya"
    }
};

var mahasiswa2 = {
    nama: "Ale Febriana",
    umur: 23,
    ips: [3.90, 3.99, 4.00],
    alamat: {
        kp: "Rancageneng",
        kel: "Sukamulya",
        kota: "Tasikmalaya"
    }
};

// 2. Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;

}

var mhs3 = buatObjectMahasiswa(
    'Lerian',
    '012020202',
    'kanglerian@gmail.com',
    'Teknik Informatika'
)

var mhs4 = buatObjectMahasiswa(
    'Ale',
    '012020202',
    'kanglerian@gmail.com',
    'Teknik Pangan'
)

// 3. Constructor

function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa(
    'Lerian',
    '012020202',
    'kanglerian@gmail.com',
    'Teknik Informatika'
);