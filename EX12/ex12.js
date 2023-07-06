/*  12. Escreva um algoritmo que armazene o ano atual e o ano de
        nascimento de uma pessoa. Escrever uma mensagem no console
        que diga se ela poderá ou não votar este ano (não é necessário
        considerar o mês em que a pessoa nasceu).  */


var anoAtual = new Date().getFullYear();
var anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
var idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log("Pode votar este ano!");
} else {
  console.log("Não pode votar este ano!");
}