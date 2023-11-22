// FOR-OF
const numeros = [12, 13, 14, 15]
console.log(numeros)

for(let i of numeros){
    console.log(i)
}

const aluno = {
    nome: 'Wild',
    // escola principal: 'Ada Tech.',
    'escola principal': 'Ada tech', // não muito comum
    idade: 25,
    turma: 1094,
    disciplinas: ['Matemática', 'História'],
    notas: {
        nota1: 1,
        nota2: 2
    }
}


// for(let i of aluno){
//     console.log(i)
// } // Uncaught TypeError: aluno is not iterable

// WHILE 

let contador = false;

while (contador) {
    console.log('Chamou: o while')
}

do{
    // executa pelo menos uma vez não importa a condição
    console.log('Chamou: O do while') 
}while (contador)

let valores = {};

do{
    if(!valores.a || isNaN(valores.a)) {
        // valores.a = +prompt('Digite o primeiro valor')
    }

    if(!valores.b) {
        // valores.b = +prompt('Digite o segundo valor')
    }
}while (!valores.a || !valores.b)


// DO WHILE
let inputUser

// valores falsy
console.log(!!inputUser)
console.log(!!0)
console.log(!!null)

console.log(!!'Mateus') // truthy

// do{
//     inputUser = prompt('Insira um valor: ')
// }while (!inputUser)

console.log(aluno)
console.log(Object.keys(aluno)) // for-of
console.log(Object.values(aluno)) 
console.log(Object.entries(aluno))
console.log(Object.entries(aluno)[0])


// Desestruturação
const [key, value] = Object.entries(aluno)[0]

console.log(key)
console.log(value)
const { nome } = aluno
console.log(nome)


console.clear()
const frutas = ['Melancia', {nome: 'Maracuja'}, 'Caqui']
console.log(frutas)

// x TODO: testar passagem por referencia
let [melancia, frutaMaracuja, caqui] = frutas

// melancia = 'Morango'
// console.log(frutaMaracuja)

frutaMaracuja.nome = 'Teste'
// console.log(frutas[0])
// console.log(melancia)

console.log(frutaMaracuja)
console.log(frutas)
// console.log(melancia, caqui)
// console.log(typeof melancia, typeof caqui)