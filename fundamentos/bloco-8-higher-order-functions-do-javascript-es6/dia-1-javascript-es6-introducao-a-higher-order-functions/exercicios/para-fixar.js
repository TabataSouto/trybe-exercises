// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const wakingUp = () => 'Acordando!!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const coffee = () => 'Bora tomar café!!';

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const goToSleep = () => 'Partiu dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

function doingThings(str) {
  console.log(str);
}

doingThings(wakingUp())
doingThings(coffee())
doingThings(goToSleep())