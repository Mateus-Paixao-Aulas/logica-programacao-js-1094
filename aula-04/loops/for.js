// For numérico

// FOR

let index = 3;
// index++ // operador de incremento
// index = index + 1

// index-- // operador de decremento
// index = index - 1

let tabuada = 9

// for(let i = 1; i < 11; i *=2){
for(let i = 1; i < 11; i++){
    // console.log(i +'x'+i + ': ' * tabuada)
    console.log(`${i} x ${tabuada} = ${i * tabuada}`)
}

const numeros = [12, 13, 14, 15]

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

console.log('----')

numeros.forEach((numero) => {
    console.log(numero)
})

const nome = 'Mateus'

for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}

console.log(nome.split('')) // gera um array com cada carácter da string

// x TODO: falar sobre label no JS (é possível mas não muito recomendável)