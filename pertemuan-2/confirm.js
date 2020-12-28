// var test = confirm('Yakin nih?');

// alert(test);

// if (test === true) {
//     alert('User menekan OK!');
// } else {
//     alert('User menekan CANCEL!');
// }

alert('Selamat datang..');

var lagi = true;

while (lagi === true) {
    var nama = prompt('masukan nama:');
    alert('Hallo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih');