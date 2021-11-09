//Adicionar o array;*
let fruits = [3, 4, 10, 1, 12];

//Criar uma variável com valor 0;
let somaFruits = 0;

//Criar um loop que percorre o array;
for (index = 0; index < fruits.length; index += 1) {

//Incrementar a variável com o valor correspondente a cada loop;
somaFruits = somaFruits + fruits[index]; //soma todos os valores dentro do array
    
}
//Criar um if com a condição da váriavel ser maior que 15;
if (somaFruits > 15) {
//Caso a varíavel obedeça a condição: Imprimir a varíavel;
    console.log(somaFruits)
} else {
//Caso não obedeça a condição: Imprimir a mensagem “valor menor que 16”;
console.log("Valor menor que 16");
}