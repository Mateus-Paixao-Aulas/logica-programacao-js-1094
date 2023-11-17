// Funções (function)

somar()

function somar(){
    console.log(2 + 2)
}

somar()

// soma() // ReferenceError: Cannot access 'soma' before initialization

const soma = function(a, b){ // criei a função com parâmetros
    console.log(a, b)
    return a + b
}
const soma2 = function(){ 

    // [10, 20, 50]
    // console.log(arguments[0])
    // console.log(arguments[1])
    // console.log(arguments[2])
    const [a, b, c] = arguments
    return a + b + c
}

// invocando ou chamando estou passando argumentos
// const a = +prompt('Digite o primeiro valor')
// const b = +prompt('Digite o segundo valor')

const valor1 = 10
const valor2 = 20

const resultado = soma(valor1, valor2)
const resultado2 = soma(30, 2)

console.log(resultado)
console.log(resultado2)
console.clear()

const resultado3 = soma2(10, 20, 50)
console.log(resultado3)


