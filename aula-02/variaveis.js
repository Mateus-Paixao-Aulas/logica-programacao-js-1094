// Variáveis...

/**
 * 
 * Declaração de variável
 * 
 * Não iniciar com número
 * Não utilizar palavras reservadas (ex. var)
 * 
 * 
 * Extra: 
 * camelCase ou lowerCamelCase
 * PascalCase ou UpperCamelCase
 * snake_case
 * kebab-case
 * 
 * SCREAMING_SNAKE_CASE
 * SCREAMING-KEBAB-CASE
 * 
 * Extra plus extra
 * 
 * Contextualize suas variáveis
 * 
 * var c; // =(  
 * var categoria; // =D  
 * 
 */

// var 01aula = 'Variáveis'; // SyntaxError

/**
 * 
 * 
 * Tipos primitivos
 * String
 * Number
 * Boolean (true ou false)
 * undefined
 * 
 * 
 */

var toy
toy = "Boneca" // String
toy = 'Carrinho' // String
toy = 26 // Number


console.log(toy) // Carrinho
console.log(typeof toy) // Number 

var typeToy = typeof toy
console.log(typeToy)

// console.log('Mostra daqui para frente...')

var aluno 
console.log(aluno) // undefined
console.log(typeof aluno) // undefined
aluno = 'Mateus'
console.log(aluno)

// aluno = undefined
// aluno = typeof aluno
console.log(typeof aluno) // String

var numero1 = 10
var numero2 = '10'

console.log(typeof numero1, typeof numero2)
console.log(numero1, Number(numero2))
console.log(numero1, parseInt(numero2))
console.log(numero1, +numero2)
console.log(aluno + ' Paixão')
console.log(+numero2 + numero1) // 20 ou 1010... 
console.log(String(numero1))

// Fazer uma soma
// var numero3 = prompt('Digite um número')
// var numero4 = prompt('Digite outro número')
// var numero5 = null
// console.log(typeof numero5) // object

var resultado = +numero3 + Number(numero4)
console.log('O valor da sua soma é: ' + resultado)
// console.log('O valor da sua soma é: ' + (Number(numero3) + Number(numero4)))