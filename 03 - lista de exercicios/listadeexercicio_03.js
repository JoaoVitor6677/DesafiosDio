/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/ 

const preco = 100;
const formaDePagamento = 4;
const debito = (preco - preco * (10 / 100));

if (formaDePagamento === 1) {
    console.log ('Débito');
    console.log (preco - (preco * (10 / 100)));
}else if (formaDePagamento === 2) {
    console.log ('PIX');
    console.log (preco - (preco * (15 / 100)));
} else if (formaDePagamento === 3) {
    console.log ('2x');
    console.log (preco);
} else if (formaDePagamento === 4) {
    console.log ('Parcelamento');
    console.log (preco + (preco * (10 / 100)));
}
