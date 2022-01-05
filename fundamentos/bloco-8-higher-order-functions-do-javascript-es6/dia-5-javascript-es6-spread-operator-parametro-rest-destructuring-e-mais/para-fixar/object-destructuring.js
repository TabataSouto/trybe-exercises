// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

// terceiro objeto criado com spread operator;
const userInfo = {
  ...user,
  ...jobInfos,
}

// 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .

const {name, age, nationality, profession, squad, squadInitials} = userInfo;

const message = `Hi, my name is ${name}, i'm ${age} years old and i'm ${nationality}. I work as a ${profession} and may squad is ${squadInitials} - ${squad}`

console.log(message)