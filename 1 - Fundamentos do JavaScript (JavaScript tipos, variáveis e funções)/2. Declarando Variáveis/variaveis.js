// var, let e const

// ************ var ************

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

// ************ let ************
// let altura = 5;
// let comprimento = 7;

// area = altura * comprimento;
// console.log(area)

// ************************
// let forma = 'triângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma === 'retângulo') {
//     area = altura * comprimento;
// }else{
//     area = (altura * comprimento) / 2;
// }

// console.log(area)

// ************ const ************
// const altura = 5;
// const comprimento = 7;

// const area = altura * comprimento;
// console.log(area)

// const forma = "triangulo";
// const altura = 5;
// const comprimento = 7;
// let area;

// if (forma === "quadrado") {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area);

//EXERCÍCIO 07 Variáveis e a resposta de tudo
var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;

{
  var respostaDeTudo = 3.14;
  let idade = 42;
  const pi = 29;
  console.log(respostaDeTudo, idade, pi);
}
console.log(respostaDeTudo, idade, pi);


// Ao declararmos uma variável como const ela deve obrigatoriamente 
// receber um valor: const taxaComissao = 0.25;

// Ao declararmos let, ao contrário, podemos apenas declarar a 
// variável, sem atribuir nenhum valor. Além disso, 
// o valor inicial pode ser modificado depois

//    var tem um escopo global, então funciona em qualquer 
// parte do código, o que pode gerar possíveis problemas 
// em relação à lógica da aplicação.
//    let e const têm escopo local, sendo assim, não podem 
// ser acessadas em outros escopos, e const não pode ter 
// seu valor alterado depois de definido.