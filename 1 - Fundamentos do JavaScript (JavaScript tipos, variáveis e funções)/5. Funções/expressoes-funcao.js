// 1 - Declarando a função
//function minhaFuncao(param) {
//     //bloco de código
// }
// minhaFuncao("param")

// 2 - expressão de função (com const por exemplo)
// const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(1,1))


// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.
console.log(apresentar())
function apresentar() {
    return "olá";
}

// quando usar uma função com variável, 
// temos que declarar a variável primeiro,
// antes de imprimir. 
// No exemplo a seguir vai dar erro: ReferenceError: Cannot access 'soma' before initialization
console.log(soma(1,1))
const soma = function (num1, num2) {
  return num1 + num2;
};
