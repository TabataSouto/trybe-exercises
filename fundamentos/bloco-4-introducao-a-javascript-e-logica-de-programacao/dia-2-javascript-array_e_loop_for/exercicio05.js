//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

//Aqui o for passa por cada um dos elementos, comparando um com o outro até achar o número que seja maior do que todos. Quando o for acontecer pela primeira vez, ele irá considerar o 5 (primeira posição numbers) maior que o 0 (valor da variavel maiorValor). Passado pelo 5, o for passa pelo 9 e considera como maior, e assim por diante. Isso porque no fim, o valor da variavel maiorValor será numbers[i].

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
}
}

console.log(maiorValor);