let total_detik = 5440

let jam = Math.floor (total_detik / 3600)
let sisadetikjam = total_detik % 3600

let menit = Math.floor (sisadetikjam / 60)
let sisadetikmenit = total_detik % 60

console.log (`jam ${jam}, menit ${menit}, detik ${sisadetikmenit}`)