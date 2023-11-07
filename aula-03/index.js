const numeros = [1, 2, 3, 4, 5, [6,7,8]]

// Array
// forEach
// map
// filter
// find

// reduce

// toFixed -> números
// split

const media = 33.39
const nomes = 'Mateus,Rafael, Rodrigo,Emily, Elaine'
console.log(nomes)
console.log(nomes.length)
console.log(nomes.split(','))
console.log(media.toFixed())


// console.log(numeros.length) // tamanho
numeros.push('Mateus')
numeros.push(10)
numeros.push('Rafael')
numeros.push('Emily')

// console.log(numeros)

// forEach


// iterar/percorrer na array
numeros.forEach((numero) => {
    console.log(numero)
    // console.log('Me chamou!')
})

const arrayDiferente1 = []
numeros.forEach((numero) => {
    arrayDiferente1.push('O Número é: '+numero)
    // console.log('Me chamou!')
})
console.log(arrayDiferente1)

const arrayDiferente = numeros.map((numero) => {
    // console.log('Me chamou!')
    return 'Número: '+numero
})


const arrayDiferente3 = numeros.filter((numero) => {
    return typeof numero === 'number'
    // return 'Número: '+numero
})

console.log(numeros)
console.log(arrayDiferente3)

// const pessoa = ['Mateus', 27, 80]

// const pessoaObjeto = {
//     nome: 'Mateus'
//     // ...
// }

// console.clear()
numeros.forEach((numero, index) => {
    numeros[index] = 'Número: '+numero
})

// console.log(numeros)
// // numeros[1]
// // numeros[2]

// numeros.forEach(numero => {
//     console.log(numero)
// })

console.clear()
const valorEncontrado = numeros.find((numero) => {
    return typeof numero === 'number'
    // return typeof numero === 'number'
    // return 'Número: '+numero
})

const arrayEncontrado = numeros.find((numero) => {
    return Array.isArray(numero)
    // return typeof numero === 'number'
    // return 'Número: '+numero
})

console.log(arrayEncontrado)
