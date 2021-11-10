// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const anguloA = 20;
const anguloB = -2;
const anguloC = 90;

const todosAngulos = anguloA + anguloB + anguloC;

if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
    console.log("O angulo não pode ser negativo!")
}else if (todosAngulos == 180) {
    console.log("true");
}else {
    console.log("false")
} 