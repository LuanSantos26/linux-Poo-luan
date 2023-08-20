const prompt = require(`prompt-sync`)();

let numero1 = parseFloat(prompt("Digite um numero: "));
let numero2 = parseFloat(prompt("Digite um numero: "));
let numero3 = parseFloat(prompt("Digite um numero: "));
if (numero1>numero2 && numero1>numero3){
    console.log(`o numero maior é ${numero1}`)
}else if  (numero2 > numero1 && numero2> numero3){
        console.log(`o numero maior é ${numero2}`)
    }else{
        console.log(`o numero ${numero3} é maior`);
    }     