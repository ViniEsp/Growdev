/*  10. Escreva um algoritmo que tenha como valores de entradas o nome
        e idade do usuário e imprima no terminal o nome, a idade e o ano
        de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
        em 2000”.
        OBS: Pegue o ano atual como base  */

var nome = prompt("Digite o seu nome:");
var idade = parseInt(prompt("Digite a sua idade:"));

// Cálculo do ano de nascimento com base no ano atual
var anoAtual = new Date().getFullYear();
var anoNascimento = anoAtual - idade;

console.log("Nome: " + nome + ", Idade: " + idade + " anos, nasceu em " + anoNascimento);