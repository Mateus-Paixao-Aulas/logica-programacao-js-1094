// Callback

const frutas = ['Banana', 'Melancia', 'Caqui', 'Carambola']

const contaCaracteres = (valor, index) => {
    if(index !== undefined){
        console.log(index)
    }
    return valor.length
}

// passando o callback para o map
const numerosFrutas = frutas.map(contaCaracteres) // point free
// const numerosFrutas = frutas.map(fruta => {
//     return contaCaracteres(fruta)
// }) // point full

const numerosNomes = contaCaracteres(['Mateus', 'Rodrigo', 'Felipe', 'Hiago'])

console.log(numerosNomes) // número: 4 
console.log(numerosFrutas) // array de números: [6, 8, 5, 9]

// remova os valores falsy

const valores = ['Mateus', '', 11, false, undefined, 'Rodrigo', null]

// const valorSemFalsy = valores.filter(valor => Boolean(valor))
const valorSemFalsy = valores.filter(Boolean)

console.log(valorSemFalsy)

const multiplicar = (numero) => {
    // função que retorna outra função
    return (valor) => 2 * numero + valor // hight order function
}

console.log()

const resultado = multiplicar(4)(2)


const transformaNumero = (fn, valor) => { // callback
    return fn(valor)
}
console.log(transformaNumero(parseInt, '500'))