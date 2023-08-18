const prompt = require ('prompt-sync')(); 

let numero = prompt("digite um numero: ");
numero = parseInt(numero);
if (numero   % 2 === 0){
    console.log("numero par")
}else{
    console.log("numero impar")
}