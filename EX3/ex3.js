/* 3.   Crie três variáveis, na primeira variável coloque o total de uma
        compra, por exemplo 149.90. Na segunda variável coloque a
        quantidade de parcelas, por exemplo 2. Na terceira variável coloque
        o valor da parcela. Apresente no documento html as seguintes
        informações:
        "O valor total da compra foi R$_,_"
        "Forma de pagamento: _x de R$_,_" */

 var totalCompra = 149.90;
 var quantidadeParcelas = 2;
 var valorParcela = totalCompra / quantidadeParcelas;

 document.write("O valor total da compra foi R$" + totalCompra );
 document.write("Forma de pagamento: " + quantidadeParcelas + "x de R$" + valorParcela);