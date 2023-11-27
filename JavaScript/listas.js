// Criando listas - Média Alunos
const notasAluno = []; // <<< CRia uma lista
notasAluno.push(100);
notasAluno.push(80);
notasAluno.push(60);
notasAluno.push(70);
let somaNotas = 0;
for (let i = 0; i < notasAluno.length; i++){
    const nota = notasAluno[i];
    somaNotas = somaNotas + nota;
}
console.log('Media do Aluno: '+ (somaNotas / notasAluno.length));


// Soletrando Palavras
const nome = 'Carlos';
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}


//Tabuada
const numero = 7;
for (let i = 1; i <=10; i++){
    let resultado = i * numero; 
    console.log( i + ' X ' + numero +  ' = ' + resultado);
}

//Maior numero sorteado
let maiorNumero = 0;
const numeroSorteado = [25, 87, 68, 47]; 
for (i = 0; i <= 4; i++){
    if ([i] > maiorNumero){
        maiorNumero = numeroSorteado[i];
    }
}
console.log(maiorNumero);
