LEVEL 2

console.log("Mini project 2");
console.log("Penilaian");

//pengolahan


const siswa = [
    {nama : "budi",nilai : [80,75,90,85]},
    {nama : "tina",nilai : [95, 92, 88, 90]}
];

function hitungRataRata(arrayNilai){
    let total = 0;
    for (i = 0; i<arrayNilai.length; i++){
        total += arrayNilai[i];
    };
    
    // ini membagi total dengan banyak nilai, sehingga didapat nilai rata rata
    return total/arrayNilai.length;
    

}
function cekGrade(rataRata){
    if(rataRata >= 90 ) return "A" ;
    if(rataRata >= 80 ) return "B" ;
    if(rataRata >= 70 ) return "C" ;
    if(rataRata >= 60 ) return "D" ;
    return "E";
}

function cekLululs(rataRata){
    return rataRata >=70 ? "lulus" : "tidak lulus";
}


siswa.forEach((siswa => {
    const rataRata = hitungRataRata(siswa.nilai);
const grade = cekGrade(rataRata);
const kelulusan = cekLululs(rataRata);

console.log(`Nama :  ${siswa.nama}`);
console.log(`nilai rata ratamu adalah ${rataRata}`);
console.log(`grade mu adalah ${grade}`);
console.log(`kamu dinyatakan ${kelulusan} \n`)
}));
