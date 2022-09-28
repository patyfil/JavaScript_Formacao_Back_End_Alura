// let x = "";
// console.log(x)
// x = "oi";

// três formas de escrever funções: Declarando, Invocando e com argumentos e retorno
// DECLARAÇÃO DE FUNÇÃO
// Os parâmetros são: x, y e z
// Os argumentos são: 10, 9 e 8
// Os argumentos de uma função não estão limitados a 
// strings e números. Você pode passar objetos.

// 1) declara a função chamando um argumento/
// função simples chamada square:
// Declarando
function imprimeTexto(texto) {
  console.log(texto);
}

// 2) executa a função (1 ou + vezes)
// Invocando
imprimeTexto("oi");
imprimeTexto("outro texto");
imprimeTexto(soma());


// 3) declara a função sem parametro 
// Retornadas como resultado de uma função
// com argumentos e retorno
function soma() {
  return 2 + 2;
}

console.log(soma())
