let termoAnterior = 0;
let termoAtual = 1;

console.log(termoAnterior);


for (let i = 2; i <= 10; i++) {
  console.log(termoAtual);

  let proximoTermo = termoAnterior + termoAtual;

 
  termoAnterior = termoAtual;
  termoAtual = proximoTermo;
}