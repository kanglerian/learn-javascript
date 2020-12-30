// Manipulasi Array

// 0. Array
// var arr = [1, "a", true];
// console.log(arr[1]);

// 1. Menambah Isi Array
// var arr = [];
// arr[0] = "Lerian";
// arr[1] = "Febriana";
// arr[2] = "Hey";

// console.log(arr[1]);

// 2. Menghapus Isi Array
// var arr = ["Lerian", "Febriana", "Hey"];
// arr[1] = undefined;

// console.log(arr);

// 3. Menampilkan isi Array 1 per satu
// var arr = ["Lerian", "Febriana", "Hey"];

// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' : ' +
//         arr[i]);
// }



// Method pada Array

// 1. Join -> menggabungkan element array
// var arr = ["Lerian", "Febriana", "Hey"];
// console.log(arr.join());
// console.log(arr.join(' - '));

// 2. Push (tambah) & Pop (hapus) = akhir element
// arr.push('Ale', 'Hanin');
// arr.pop();
// console.log(arr.join(' - '));

// 3. Unshift (tambah) & Shift (hapus) = awal element
// arr.unshift('Ale', 'Hanin');
// arr.shift();
// console.log(arr.join(' - '));

// 6. Foreach
// model 1
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Adhie", "Faisal", "Akmal"]

// angka.forEach(function(e) {
//     console.log(e)
// })

// model 2\
// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(cetak);

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' +
//         e)
// })

// 7. Map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });

// console.log(angka2.join(' - '));

// 8. Sort
// var angka = [1, 2, 4, 5, 7, 3, 6, 9, 8];
// angka.sort();
// console.log(angka.join(' - '));