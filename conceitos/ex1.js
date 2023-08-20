
const prompt = require(`prompt-sync`)();
let numero = parseFloat(prompt("Digite um numero inteiro para calcular o fatorial: "));
let multiplicacao = 1;

for(let i = numero; i >= 1; i--){
    multiplicacao = multiplicacao * i;
}
console.log(`O fatorial de ${numero} é, ${multiplicacao}`);