let nama = "lutfi";
let besargaji = 2000000;

let tunj = 0.2 * besargaji;
let pajak = 0.15 * (besargaji + tunj);
let bersih = besargaji + tunj - pajak;

console.log (`Nama karyawan ${nama}, Tunjangan adalah ${tunj}, Pajak adalah ${pajak}, Gaji Bersih adalah ${bersih}`)
