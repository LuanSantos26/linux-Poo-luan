const prompt = require ('prompt-sync')(); 

let ano = prompt("digite um ano para saber se o mesmo é bisexto: ")
ano=parseInt(ano);
if (ano %4==0){
    console.log("ano bisexto")
}else{
    console.log("não é bisexto")
}