const prompt = require ('prompt-sync')(); 

function calculadora(){
let numero1=prompt("digite um numero: ");
numero1=parseInt(numero1);
let numero2=prompt("digite outro numero: ");
numero2=parseInt(numero2)
let resultado=0
let operador=prompt("digite um operador 1  para +, 2 para -, 3 para /,4 pata *")
switch (operador){
    case "1":
        resultado=numero1+numero2;
        console.log(`a soma dos numeros é ${resultado}`);
        break;
        calculadora();
    case "2":
        resultado=numero1-numero2;
        console.log(`a subtração entre os numeros é ${resultado}`);
        break;
        calculadora();
    case "3":
        resultado=numero1/numero2;
        console.log(`a divisão entre os numeros é ${resultado}`);
        break;
        calculadora();
    case"4":
        resultado=numero1*numero2;
        console.log(`a multiplicação dos numeros é ${resultado}`);
        break;
        calculadorqa();
    default:
        console.log("operação invalida !")
        break;  
        calculadora();              

    }
}
calculadora()