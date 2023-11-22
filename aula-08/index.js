// Reduce
const numeros = [1,2,3,4,5]

// map -> retorna a mesma quantidade de items
// filter -> diminui dependendo da condição
// reduce -> reduzir / transformar

console.log(numeros)

// somar todos os items
// accumulator // ele que será retornado
// current // valor atual
const total = numeros.reduce((acc, current) => {
    return acc + current
})

const dados = [
    { tipo: 'A', valor: 10 },
    { tipo: 'B', valor: 20 },
    { tipo: 'A', valor: 30 },
    { tipo: 'A', valor: 40 },
    { tipo: 'B', valor: 50 },
    { tipo: 'B', valor: 60 },
]

console.log(dados)

const dadosAgrupados = dados.reduce((acc, current) => {
    const { tipo } = current

    if(!acc[tipo]){
        acc[tipo] = []
    }

    acc[tipo].push(current)

    return acc
})

console.log(dadosAgrupados)