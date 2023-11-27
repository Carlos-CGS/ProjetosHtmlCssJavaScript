//Criando um objeto pessoa - Chave X Valor
const pessoa = {
    nome: 'Carlos Garcia',
    idade: 33,
    apresentar: function () {
        console.log('Meu nome é '+ this.nome + ' e tenho ' + this.idade + ' anos.'); //Função dentro do objeto.
    }
};
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.altura = 1.80; // Adiciona altura ao objeto
console.log(pessoa);
delete pessoa.altura; // Deleta informações do objeto
pessoa.apresentar();
console.log(pessoa['nome']);

//Criando uma classe genérica
class Humano{
    nome;
    idade;
    apresentar () {
        console.log('Meu nome é '+ this.nome + ' e tenho ' + this.idade + ' anos.');
    }
}
const joao = new Humano;
joao.nome = 'Joao da Silva';
joao.idade = 25;
joao.apresentar();

//Criando uma classe genérica com cosntrutor
class Veiculo{
    modelo;
    cor;

    constructor(modelo, cor){
        this.modelo = modelo;
        this.cor = cor;
    }
}
const carro1 = new Veiculo('Gol', 'branco');
const carro2 = new Veiculo('Palio', 'preto');
console.log(carro1, carro2);


