/*  11. Crie um algoritmo que armazene um número inteiro positivo, e gere
        um alerta com as seguintes mensagens:
        a. “Número é par!”, se o valor armazenado for par;
        b. “Número é impar!”, se o valor armazenado for ímpar;  */


var numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero % 2 === 0) {
  alert("Número é par!");
} else if (numero % 2 === 1){
  alert("Número é ímpar!");
}else{
  alert("Número inválido!");
}