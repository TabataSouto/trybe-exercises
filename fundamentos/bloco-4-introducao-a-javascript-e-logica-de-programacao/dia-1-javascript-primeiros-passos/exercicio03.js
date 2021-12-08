// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const num1 = 12;
const num2 = 27;
const num3 = 18;

if (num1 > num2 && num1 > num3) {
    console.log("O num1 é maior do que o num2 e num3");
}
else if (num2 > num1 && num2 > num3) {
    console.log("O num2 é maior do que o num1 e num3");
}else {
    console.log("O num3 é maior do que o num1 e num2");
}