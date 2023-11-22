// Conficionais / Quebra De fluxo / Tomada de decisão

// IF - ELSE

// if(condicao) // condicao é um booleano

const ehVerdadeiro = 9 < 4 // false

if(ehVerdadeiro){
    console.log('Cai no IF')
}else{
    console.log('Cai no ELSE')
}

console.log('Vai ser executado...')


const modoEdicao = true

let titulo;

if(modoEdicao){
    titulo = 'Você está editando a página...';
}else {
    titulo = 'Você está visualizando a página...';
}
console.log(titulo)

// ternário

// (condicao) ? valor-se-verdadeiro : valor-se-falso; 
const label = modoEdicao ? 'Você está editando a página...' : 'Você está visualizando a página...';
console.log(label)

// const label = if(modoEdicao) { 'Você está editando a página...' ... } // erro de sintaxe 

const nome = ''
// recomendado para operações mais simples
const ehVazio = nome ? 'não é vazio' : 'é vazio'

// não é legal fazer :\
// const numeroEscolhido = 10 ? 10 >= 4 && 10 == 4 : 10 !== 10%2 ? 'Não é legal fazer' : 'Não faça isso'; 
// console.log(numeroEscolhido)

console.log(ehVazio)
console.log(!!10)

// quebra de fluxo


const numeros = [1,2,3,4]
for(let i = 0; i < numeros.length; i++){
    // break
    if(numeros[i] == 3){
        console.log('Pare a iteração')
        break; // para a iteração
    }

    console.log(numeros[i])
    // console.log('A iteração continua...')
}

for(let i = 0; i < numeros.length; i++){
    // break
    if(numeros[i] == 3){
        console.log('Pulou a iteração na condição definida')
        console.log('Passou pelo três!')
        continue; // pular a iteração neste condição
    }

    // este código não é executado


    console.log(`Este e o número: ${numeros[i]}`)
    // console.log('A iteração continua...')
}

// else if
const numero = 1
if(numero < 4){
    console.log('Sim é maior que 4')
}else if(numero === 9){
    console.log('Este número é o 9')
}

console.clear()
// const verificarNumero = Number(prompt('Informe um número'));
const verificarNumero = 10;
let ehPositivoTexto;

console.log(verificarNumero)

if(verificarNumero > 0) {
    ehPositivoTexto = 'O número informado é positivo';
} else if(verificarNumero < 0){
    ehPositivoTexto = 'O número informado é negativo';
} else if(isNaN(verificarNumero)){
    ehPositivoTexto = 'Por favor informe um número.';
} else {
    ehPositivoTexto = 'O número informado é zero';
}

console.log(ehPositivoTexto)

// Isso aqui não é legal :\ 
// if(true && true){
//     console.log('Meu código')
//     if(true){
//         console.log('Meu código')
//         if(true){
//             console.log('Meu código')
//             if(true){
//                 console.log('Meu código')
//                 if(true){
//                     console.log('Meu código')
//                     if(true){
//                         console.log('Meu código')
//                         if(true){
//                             console.log('Meu código')
//                             if(true){
//                                 console.log('Meu código')
//                                 if(true){
//                                     console.log('Meu código')
//                                 }
//                             }
//                         }

//                         if(true){
//                             console.log('Meu código')
//                         }
//                     }
//                 }
//             }
            
//             if(true){
//                 console.log('Meu código')
//             }
//         }
//     }
// }else{
//     console.log('Meu código')
// }

// x TODO: tratamento de erros e validações
// o Valor não é o que você espera // exceção
// o valor é no formato esperado, fazer validações
