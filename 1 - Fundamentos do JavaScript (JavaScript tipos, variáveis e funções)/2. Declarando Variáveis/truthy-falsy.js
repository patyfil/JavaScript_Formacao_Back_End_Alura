// boolean
const usuarioLogado = true
const contapaga = false

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// undefined

// null ==> vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar)
console.log(varNull)

let numero = 3;
let texto = "Alura";

console.log(typeof numero)
console.log(typeof texto)
console.log(typeof varNull); // bug do JS que null retorna objeto
