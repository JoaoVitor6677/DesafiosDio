//Crie um progama onde dada determinada forma de pagamento aplique um desconto ou aplique juros ao preco final do produto.


function aplicarDesconto (preco, desconto) {
    return (preco - (preco * ( desconto/ 100)));
}

function aplicarJuros (preco, desconto) {
    return (preco + (preco * ( desconto/ 100)));
} 

const preco = 100
const formaDePagamento = 4

if (formaDePagamento === 1) {
   console.log (aplicarDesconto (preco, 10))
}else if (formaDePagamento === 2) {
    console.log (aplicarDesconto (preco, 15))
} else if (formaDePagamento === 3) {
    console.log (preco);
} else if (formaDePagamento === 4) {
    console.log (aplicarJuros (preco, 10))
}


