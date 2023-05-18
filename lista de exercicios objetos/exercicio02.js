/* 
    2 - Crie, uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura
    As pessoas devem ter capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)); 
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc () {
        return (this.peso / (this.altura * this.altura));
    }

    classificarImc () { 
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return ('Eu estou abaixo do peso');
        } else if ( imc >= 18.5 && imc <= 25) {
            return ('Eu estou dentro do peso normal');
        } else if ( imc > 25 && imc <= 30 ) {
            return ('Eu estou acima do peso');
        } else if ( imc > 30 && imc <= 40 ) {
            return ('Eu estou Obeso')
        } else if ( imc >= 40 ) {
            return ('Eu estou com Obesidade Grave!')
        } 
    }    
}

const jose = new Pessoa ('José', 70, 1.75);
const joao = new Pessoa ('João', 83, 1.80);
new Pessoa('Vitor', 60, 1.80).calcularImc

console.log (vitor);