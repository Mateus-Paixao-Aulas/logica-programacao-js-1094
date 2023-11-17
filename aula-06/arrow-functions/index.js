// Funções (arrow functions)

const soma = function(a, b){ 
    console.log(arguments)
    return a + b
}

// const somaArrow = () => {
//     console.log(arguments) // ReferenceError: arguments is not defined
// }

const somaArrow = (a, b) => a + b

const somaArrowObject = ({ a, b, ...rest }) => {
    // const { a, b } = valores

    console.log(rest)
    return a + b
}

const mostrarValor = (valor) => valor ? 'VERDADEIRO' : 'FALSO'   
// console.log(mostrarValor('Rodrigo'))


const resultado = soma(10, 20)
const resultadoArrow = somaArrow(50, 50)
console.log(resultado)
console.log(resultadoArrow)

const resultadoArrowObject = somaArrowObject({
    a: 10,
    b: 15,
    c: 200,
    d: 300,
    e: 400,
})

console.log(resultadoArrowObject)

const aluno = { // objeto
    nome: 'Felipe',
    nota1: 10,
    nota2: 8,
    turma: 1094,
    senha: '1234',
    notas: {
        mostrar: function(){
            console.log(this.nota1) // undefined
        }
    },
    // método
    somar: function() { // função
        return this.nota1 + this.nota2
    }

    // somar: () => { // função
    //     console.log(this.alert('não funcionou como esperado.'))
    //     return this.nota1 + this.nota2
    // }
}

// spread operator (espalhar)
const { senha, ...alunoSemSenha } = aluno 
console.log(alunoSemSenha)
console.log(alunoSemSenha.turma)
console.log(alunoSemSenha.nome)
console.log(senha)
console.log(aluno)

delete aluno.senha
console.log(aluno)

console.clear()
console.log(aluno.somar())
console.log(aluno.notas.mostrar()) // Não da certo