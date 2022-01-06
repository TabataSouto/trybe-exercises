// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .

const greet = (namePerson, message = 'Hello') => `${message} ${namePerson}`;

console.log(greet('John'))
console.log(greet('John', 'Good morning'))
console.log(greet('Isabela', 'Oi'))