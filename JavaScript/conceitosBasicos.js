// Para executar (node aula.js)

// Gasto Combustível
const precoCombustivel = 5.89;
const kmPorLitros = 11;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitros;
const gastoMedio = litrosConsumidos * precoCombustivel;
console.log(gastoMedio.toFixed(2)); // toFixed = fixa casa decimal em 2

// Numero é par
const numero = 11;
const isNumeroPar = (numero % 2) === 0;
if (isNumeroPar) {
    console.log('par'); 
}else if (numero === 0){
    console.log('numero zero');
} else{
    console.log('impar');
}

//Media Notas
const nota1 = 100;
const nota2 = 80;
const nota3 = 70;
const nota4 = 60;
let mediaNotas = (nota1 + nota2 + nota3 + nota4)/4;

if (mediaNotas >= 8){
    console.log('Nota A');
} else if (mediaNotas >= 5 && mediaNotas < 8){
    console.log('Nota B');
}else{
    console.log('Nota C');
}
