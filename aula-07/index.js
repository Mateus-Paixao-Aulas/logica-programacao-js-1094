// Tratamento de erros

// x TODO: falar por que não apareceu
// console.log(label)
// const label = 'Nome: ' // UncaughtError

// Erro comum/nativo do Javascript
try {
    console.log(label)
    const label = 'Nome: '    
} catch (error) {
    console.error(error)
    // alert('=( Ops erro: '+ error.message)
}

// Erros customizados (regras de negócio)
const numero = Number(prompt('Digite um número'))

try {
    if(isNaN(numero)){
        // Lançar uma exceção
        throw 'Por favor, digite um número!'
    }

    // meu código aqui
    console.log(numero ** 2)
} catch (error) {
    console.log(error)
}

try {
    alert('Carregando...')
    if(isNaN(numero)){
        // Lançar uma exceção
        throw new Error('Por favor, digite um número!')
    }

    alert(numero ** 2)
} catch (error) {
    console.log(typeof error)
    console.dir(error) // mostra propriedades que posso acessar
    console.error(error.message)
    console.warn(error.stack)
    alert(error)
}finally{
    // loadings
    alert('Carregado!')
    // alert('Execução finalizada.')
}