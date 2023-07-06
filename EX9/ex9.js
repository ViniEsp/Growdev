/*  9. As maçãs desta estação custam R$0,30 se forem compradas
        menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
        doze. Desenvolva um algoritmo que leia o número de maçãs
        compradas, calcule e escreva o valor total da compra.  */

var quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));

var preco;
if (quantidade < 12) {
  preco = 0.30;
} else {
  preco = 0.25;
}

var valorTotal = quantidade * preco;

document.write("Valor total da compra: R$" + valorTotal.toFixed(2));