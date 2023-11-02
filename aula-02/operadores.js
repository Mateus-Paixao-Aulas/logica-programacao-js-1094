
// Operadores

// Operadores atribuição: = 
// Operadores de coerção: +, Number, parseInt
/**
 * 
 * // Operadores aritméticos: 
 * 
 * Adição: +
 * Subtração: -
 * Divisão: /
 * Divisão: %
 * Multiplicação: *
 * Exponenciação: **
 * 
 */

var resultado2
var numero7 = 2

resultado2 = numero7 + numero7 // Adição -> 4
console.log(resultado2)
resultado2 = numero7 - 1 // Subtração -> 1
console.log(resultado2)

resultado2 = 10 / numero7  // Divisão -> 5
console.log(resultado2)

resultado2 = 10 * numero7  // Multiplicação -> 5
console.log(resultado2)

resultado2 = numero7 + numero7 / numero7 // ordem -> 3
console.log(resultado2)

resultado2 = (numero7 + numero7) / numero7 // ordem -> 2
console.log(resultado2)

resultado2 = 4 ** numero7  // Exponenciação -> 16
console.log(resultado2)

resultado2 = 10 % numero7 // Resto -> 0
console.log(resultado2)

/**
 * 
 * 
 * PEMDAS
 * 
 * P: Parenteses
 * E: Exponenciação
 * M: Multiplicação
 * D: Divisão (Resto, Inteira)
 * A: Adição
 * S: Subtração
 * 
 */

// Operadores de atribuição: =, +=, -=, *=, /=...

var x = 2
var y = 3

var a = 2
var b = 3

console.log(x += y) // x = x + y // 5
console.log(a = a + b) // x +=y // 5


// Operadores de comparação: ==, !=, >, <, <=, ===
a = 2
b = 3
console.log(a == b) // false
console.log(a != b) // true
console.log(a > b) // false
console.log(a < b) // true
console.log(a >= b) // false
console.log(a <= b) // true


console.log('operadores === e !==')
console.log(10 === '10')
console.log(10 !== '10')

// var comparacao = a == b
// console.log(typeof comparacao) // boolean


console.clear()
// Operadores lógicos && (AND), || (OR), ! (NOT)
console.log(a == b && a == 2) // false
console.log(a == 2 && a == 2) // true
console.log(a == b || a == 2) // true
console.log(!(a == b || a == 2)) // false

// condicao1 && 
// condicao2 && 
// condicao3 