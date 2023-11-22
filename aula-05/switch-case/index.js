// SWITCH CASE

const diaSemana = 1;

switch(diaSemana){
    case 1:
        console.log('Domingo');
    break;
    case 2:
        console.log('Segunda');
    break;
    case 3:
        console.log('Terça');
    break;
    default: 
        console.log('Dia da semana não cadastrado');
}

console.clear()
const cor = 'rgb(0,0,0)';
let corTraduzida;

switch(cor){
    case 'red':
    case '#C00':
        corTraduzida = 'Vermelho';
    break;

    case 'black':
    case '#000':
    case '#000000':
    case 'rgb(0,0,0)':
        corTraduzida = 'Preto';
    break;
    default: 
        corTraduzida = 'Cor não cadastrada';
    break;
}

console.log(corTraduzida)

let valor = 4;

// x TODO: em qual ECMA foi introduzido, link artigo.
switch (true) {
    case valor > 4:
        console.log('Maior que 4');
        break;

    case valor < 4:
        console.log('Maior que 4');
        break;
    default:
        console.log('Igual');
        break;
}


// exemplo de uso
const route = 'aula-05/'
switch (route) {
    case 'aula-05/':
        location.href = '/quinta-aula-ministrada-logica-js'
        break;
    default:
        location.href = '/404'
        break;
}


