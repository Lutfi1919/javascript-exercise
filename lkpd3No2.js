let z = 173

let satuan = z % 10
let puluhan = Math.floor (z / 10) % 10
let ratusan = Math.floor (z / 100) % 10

console.log (`${satuan} satuan, ${puluhan} puluhan, ${ratusan} ratusan`)