// let vs const (..var) //ecmaScript6
// let sobrenome; // declarar variável
// sobrenome = 'Paixão'; // atribuir variável
// let nomeCompleto = 'Mateus Paixão'; // declarar e atribuir variável

let nome = 'Mateus'
{
    let nome = 'Reydson'
    nome = 'Lucas'
    console.log(nome) // Reydson
    // meu código...
}

// Hoisting // içamento
console.log(nome) // Mateus ou Reydson

console.clear();
// console.log(sobrenome); // Erro: Acessou antes da declaração.
// let sobrenome;
// sobrenome = 'Galdino';
// console.log(sobrenome) // Galdino

// console.log(turma) // Cannot access 'turma' before initialization
const turma = 1094; // variável constante 
// turma = 1098 // Erro: reatribuição de uma constante
console.log(turma)


let x, y
{   
    x = 10
    y = 10
    const resultado = x + y // retornaria 
    console.log(resultado) // quero utilizar o resultado fora
}

console.clear();
console.log(sobrenome) // Undefined
var sobrenome = 'Mateus'
console.log(sobrenome) // Mateus