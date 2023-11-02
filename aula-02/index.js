
var fruta = 'Tomate'
// fruta = 'Melancia'

var frutas = [fruta, 'Melancia', 26]

frutas[1] = 'Abacaxi'
frutas[4] = 'Abacaxi'
frutas[10] = 'Abacaxi'

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])

console.log(typeof frutas[9])

// frutas.push('Caqui')
frutas.push(true)

console.log(frutas)

// objetos

console.clear()
// var aluno = 'Mateus'

var aluno = {
    nome: 'Mateus',
    // turma: 1094,
    somarNotas: function(){
        console.log('// Executa soma das notas')
    }
}

aluno.turma = 9999
aluno.x = 9999
aluno.sobrenome = 'Paixão'

console.log(aluno)
// console.log(aluno.nome)
// console.log(aluno.turma)
// console.log(aluno.somarNotas())