//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const num1 = 12; //par
const num2 = 2; //impar
const num3 = 4; //impar

if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1){
    console.log("true")
} else {
    console.log("false")
}