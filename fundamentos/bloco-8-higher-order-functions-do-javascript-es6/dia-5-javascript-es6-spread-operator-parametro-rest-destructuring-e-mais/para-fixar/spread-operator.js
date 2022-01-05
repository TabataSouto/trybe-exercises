// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Manga', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Pêssego', 'Uva', 'Melância'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruits = [...specialFruit, ...additionalItens];
  return fruits;
};

console.log(fruitSalad(specialFruit, additionalItens));