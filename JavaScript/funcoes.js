//Função que calcula o IMC
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Você esttá abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Você está com o peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Voceê está acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Você está obeso';
    } else {
        return 'Você está com obsedidade Grave';
    }
}
// Função principal = Main
(function () {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();


//Criando uma função e atribuindo valores diferentes a mesma função
function seuNome(nome){
    console.log('Meu nome é ' + nome);
}
seuNome('Carlos');
seuNome("jose");


// Criando função imediatamente invocada (cria e se executa)
// Pode-se até tirar o nome da função que ela funciona da mesma forma.
(function mediaNotas(media1, media2){
    media1 = 80;
    media2 = 90;
    const mediaNotas = (media1 + media2)/2;
    console.log('A sua média é :' + mediaNotas);
})();
