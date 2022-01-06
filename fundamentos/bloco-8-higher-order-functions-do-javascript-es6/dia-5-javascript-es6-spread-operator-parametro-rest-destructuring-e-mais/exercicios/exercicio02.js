// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

function sum (...value) {
  return value.reduce((acc, val) => acc + val, 0);
};

console.log(sum(10, 10));