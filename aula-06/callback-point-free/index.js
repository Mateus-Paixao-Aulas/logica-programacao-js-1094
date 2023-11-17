// Callback

const frutas = ['Banana', 'Melancia', 'Caqui', 'Carambola']

const contaCaracteres = valor => {
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