// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// - Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = "peão";

if (pecaXadrez.toLowerCase() == "bispo") {
    console.log("O Bispo se move ao longo da diagonal");
}
else if (pecaXadrez.toLowerCase() == "torre") {
    console.log("A Torre se move pela vertical ou horizontal");
}
else if (pecaXadrez.toLowerCase() == "cavalo") {
    console.log("O Cavalo pode pular outras peças, se move em forma de 'L'")
}
else if (pecaXadrez.toLowerCase() == "rei") {
    console.log("O Rei se move em todas as direções uma casa de cada vez");
}
else if (pecaXadrez.toLowerCase() == "rainha") {
    console.log("A Rrainha se move ao longo da horizontal, vertical e diagonais");
}
else if (pecaXadrez.toLowerCase() == "peão") {
    console.log("O Peão se move apenas uma casa para frente e captura na diagonal")
}
else {
    console.log("[ERRO] Peça não encontrada!")
}
;
