/*
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    modelo;
    cor;
    tipoDeCombustivel;
    kmPorLitro;

    constructor (marca, modelo, cor, tipoDeCombustivel, kmPorLitro) { 
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.kmPorLitro = kmPorLitro
        this.tipoDeCombustivel = tipoDeCombustivel

    }

    precoDaViagem (distancia) {
        const gasolina = 5;
        const etanol = 3;

        if (this.tipoDeCombustivel == 'gasolina') {
            console.log (distancia * gasolina / this.kmPorLitro);
        } else if (this.tipoDeCombustivel === 'etanol') {
            console.log (distancia * etanol / this.kmPorLitro);
        }
    }
}

const civic = new Carro ('Honda', 'Civic', 'Prata', 'gasolina', 10);
const astra = new Carro ('Chevrolet', 'Astra', 'Vermelho', 'etanol', 5);

astra.precoDaViagem (20);
console.log (astra);


 
