//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// email tudo minusculo
// tirar espaço do email e substituir espaço por _
const createObj = (nomeCompleto) => {
  // o metodo replace substitui uma sequencia ou um caracter por outro, nesse caso, ele substituiu tudo o que tem espaço por underline;
  let forEmail = nomeCompleto.replace(' ', '_');
  return ({ name: nomeCompleto, email: `${forEmail.toLowerCase()}@trybe.com`,})
};

// createObj('Pedro Soares');

const newEmployees = () => {
  const employees = {
    id1: createObj('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createObj('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createObj('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());