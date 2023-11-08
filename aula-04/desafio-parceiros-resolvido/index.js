/**
 * 
 * # Categorização de Parceiros 

Uma empresa de engenharia precisa fazer a separação de seus parceiros/sócios em duas modalidades, parceiros PF, pessoas físicas no qual possuem CPF e PJ pessoas jurídicas no qual possuem CNPJ, dito isso temos a seguinte lista:

| parceirosId      | nome            |
|------------------|-----------------|
| 19660156627897   | Fernanda Santos |
| 23998058019370   | Rafael Souza    |
| 92291338611      | Maria Silva     |
| 55443795656      | Maria Souza     |
| 77743761456      | Ana Costa       |
| 47202302326      | Maria Ferreira  |
| 58017232567      | Sofia Costa     |
| 16733009491247   | Lucas Silva     |
| 63351859919      | Rafael Souza    |
| 84297701780      | Carlos Oliveira |


O resultado final desse agrupamento deverá ser algo como:

    const parceirosAgrupados = {
      PF: [
        { parceirosId: '12345678901', nome: 'Carlos Antonio' },
        { parceirosId: '12345678901', nome: 'Informática' },
      ],
      PJ: [
        { parceirosId: '12345678901234', nome: 'Empresa Xpto Ltda.' },
        { parceirosId: '12345678901235', nome: 'Construtora' },
      ]
    }

Dicas: 
- Utilize o conteúdo aprendido na aula de hoje.
- Leve em conta o parceirosId para fazer a diferenciação.
- Gere um **Array** de **Objetos** a partir da tabela apresentada.
 * 
 * 
 * 
 * 
 */

/**
 * 
 * forEach
 * map
 * filter
 * find
 * 
 * operadores lógicos, condicionais, atribuição
 * 
 */

const parceiros = [
    { parceirosId: '19660156627897', nome: 'Fernanda Santos' },
    { parceirosId: '23998058019370', nome: 'Rafael Souza' },
    { parceirosId: '92291338611', nome: 'Maria Silva' },
    { parceirosId: '55443795656', nome: 'Maria Souza' },
    { parceirosId: '77743761456', nome: 'Ana Costa' },
    { parceirosId: '47202302326', nome: 'Maria Ferreira' },
    { parceirosId: '58017232567', nome: 'Sofia Costa' },
    { parceirosId: '16733009491247', nome: 'Lucas Silva' },
    { parceirosId: '63351859919', nome: 'Rafael Souza' },
    { parceirosId: '84297701780', nome: 'Carlos Oliveira' },
]

// verificar o tamanho para saber se é CPF ou CNPJ
// cpf tem 11 digitos
// cnpj tem 14 digitos


// utilizando filter
const parceirosAgrupados = {
    PF: parceiros.filter((parceiro) => parceiro.parceirosId.length === 11),
    PJ: parceiros.filter((parceiro) => parceiro.parceirosId.length === 14)
}


// utilizando forEach
const parceirosAgrupados2 = {
    PF: [],
    PJ: []
}
parceiros.forEach((parceiro) => {
    parceiro.parceirosId.length === 11 && parceirosAgrupados2.PF.push(parceiro)
    parceiro.parceirosId.length === 14 && parceirosAgrupados2.PJ.push(parceiro)
})

console.log(parceirosAgrupados2)

console.log(parceiros.filter)