//Heranças __proto__
const veiculo = {
    cor: 'preto'
}
const carro = {
    nome: 'Gol',
    __proto__: veiculo
}
console.log(carro.cor);


// Criando protótipos / Herança
function Pessoa(nome, idade){
    this.nome = nome, 
    this.idade = idade
}
Pessoa.prototype.falar = function(){
    console.log('Meu nome é '+ this.nome + ' e tenho ' + this.idade + ' anos.') ;
}
const carlos = new Pessoa('Carlos', 30);
carlos.falar()

//Outra forma, utilizando o call
Pessoa.call(carlos, 'José', 33);
carlos.falar()


//Calculadora
function adi(x, y){
    return x + y
}
function sub(x, y){
    return x - y
}
function mult(x, y){
    return x * y
}
function div(x, y){
    return x / y
}
function Calculadora(x, operador, y){
    console.log(operador(x, y))
}
Calculadora(5, adi, 8)
