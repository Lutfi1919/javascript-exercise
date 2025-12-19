let x = 70;
let y = 82;
let z = 77;

let L = ((x + y + z)/3);{
    console.log("Rata-rata",L);
}
if (L >= 80 && L <= 100){
    console.log("Grade A");
}
else if (L >= 75 && L < 80){
    console.log("Grade B");4
}
else if (L >= 65 && L < 75){
    console.log("Grade C");
}
else if (L >= 45 && L < 65){
    console.log("Grade D");
}
else if (L >= 0 && L < 45){
    console.log("Grade E");
}
else{
    console.log("Grade K");
}