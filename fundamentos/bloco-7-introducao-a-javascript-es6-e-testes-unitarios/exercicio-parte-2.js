// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

// 1 - Crie uma função que receba um número e retorne seu fatorial.
// a) Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// b) Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

function fatorialNumber (n) {
  // começa do 1 porque começando de 0 vai ser 0; 
  let number = 1;
  for (let i = 2; i <= n; i += 1) {
    number *= i;
  }
  return number;
}
console.log(fatorialNumber(4));

// recursiva
// aqui diz que se o numero n for maior que 1, então será ele vezez ele mesmo - 1 e se for menor que 1 retornar 1 retornar 1
const numberFatorial = (n => n > 1 ? n * numberFatorial(n - 1) : 1);
// console.log(numberFatorial(4));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

// // a) declarar a uma variável para a maior palavra da frase;
// let bigWorld = '';
// function biggestWord(phrase) {

// }

// console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))