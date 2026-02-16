function kalkulator(){
    console.log("Program kalkulator (+,-,*,/)");
    
    let input = prompt("Masukan dengan format (a + b) = ");
    
    if (input){
        let bagian = input.split(" ");
        
        //angka1, operator, angka2
        let nom1 = parseFloat(bagian[0]);
        let operator = bagian[1];
        let nom2 = parseFloat(bagian[2]);
        
        let result;
        switch (operator){
            case "+":
                result = nom1+nom2;
                break;
            case "-":
                result = nom1-nom2;
                break;
            case "*":
                result = nom1*nom2;
                break;
            case "/":
                if (nom2 !==0 ){
                    result = nom1/nom2;
                }
                else{
                    result = "Angka kedua tidak boleh 0";
                }
                break;
            default:
                console.log("Operator tidak valid! Gunakan salah satu: +, -, *, /");
                return;
        }
        console.log(`hasil dari ${nom1} + ${nom2} = ${result}`);
    }
    else{
        console.log("input tidak valid")
    }
    
    let lagi = prompt("Apakah anda akan menghitung lagi? (yes/no) : ");
    if (lagi.toLowerCase() === "yes"){
        kalkulator();
    }else{
        console.log("Terimakasih telah menggunakan kalkulator mini project ini")
    }
}

kalkulator();
