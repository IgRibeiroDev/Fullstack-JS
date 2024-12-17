function compararNumeros(num1,num2) {
    const FRASE1 = criarFrase1(num1, num2);
    const FRASE2 = criarFrase2(num1, num2);

    return `${FRASE1} ${FRASE2}`
}

function criarFrase1(num1,num2) {
    let primeiraFrase = `Os números ${num1} e ${num2} `;
    let simNao = 'não';

    if (num1 === num2) {
        simNao = '';
    }

    return `${primeiraFrase} ${simNao} são iguais.`
}

function criarFrase2(num1,num2){
    const soma = num1+num2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';
    
    if (soma == 10) {
        comparaDez = 'igual a';
    }
    if (soma == 20) {
        comparaVinte = 'igual a';
    }
    if (soma > 10) {
        comparaDez = 'maior do que';
    }
    if (soma > 20) {
        comparaVinte = 'maior do que';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} 10 e ${comparaVinte}  20.`
}

console.log(compararNumeros(5,5));
