// 1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.
let soma = 0;

for (let i = 1; i <= 1000; i += 1) {
    soma = soma + i;
}
console.log("A soma de 1 a 1000: " + soma);
​
//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.


​
//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let player1 = "papel";
let player2 = "pedra";
​
if (player1 === "papel" && player2 === "pedra") {
    console.log("Player 1 won")
} else if (player1 === "pedra" && player2 === "tesoura") {
    console.log("Player 1 won")
} else if (player1 === "tesoura" && player2 === "papel") {
    console.log("Player 1 won")
} else if (player2 === "papel" && player1 === "pedra") {
    console.log("Player 1 won")
} else if (player2 === "pedra" && player1 === "tesoura") {
    console.log("Player 1 won")
} else if (player2 === "tesoura" && player1 === "papel") {
    console.log("Player 1 won")
}


//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let idade = 22;

if (idade > 18) {
    console.log("A pessoa é maior de idade")
} else {
    console.log("A pessoa é menor de idade")
}

​
//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarolzinha = 22;
let idadeMurilo = 25;
let idadeBaeta = 20;

if (idadeCarolzinha < idadeMurilo && idadeCarolzinha < idadeBaeta) {
    console.log("Carolzinha é a mais nova");
} else if (idadeMurilo < idadeCarolzinha && idadeMurilo < idadeBaeta) {
    console.log("Murilo é o mais novo");
} else {
    console.log("Baêta é o mais novo");
}

​