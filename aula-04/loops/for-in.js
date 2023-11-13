// FOR-IN

const numeros = [12, 13, 14, 15]
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

for(let index in numeros){
    console.log(numeros[index])
}

const property = 'nome'

console.log('----')
console.log(aluno[property])
console.log(aluno.nome)
console.log(aluno.idade)
console.log(aluno.turma)
console.log('----')

for(let propertyValue in aluno){
    console.log(propertyValue) // propriedade
    console.log(aluno[propertyValue]) // valor
}

console.clear()

console.log(aluno.disciplinas[0])
console.log(aluno.disciplinas[1])

console.log(aluno.notas['nota1'])
console.log(aluno.notas['nota2'])
console.log(aluno['escola principal'])
console.log(aluno['disciplinas'])

for(let key in aluno){
    // console.log(aluno[key])
    for (let i in aluno[key]){
        // aluno.disciplinas[0]
        // aluno.disciplinas[1]

        // aluno.notas['nota1']
        // aluno.notas['nota2']

        console.log(aluno[key][i])
    }
}

// x TODO: falar sobre break (feito)