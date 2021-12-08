const bodyDad = document.getElementsByTagName('body');
const mainDad = document.getElementsByClassName('main-content');
const sectionOneMain = document.getElementsByClassName('center-content');
const sectionTwoMain = document.getElementsByClassName('left-content');
const sectionThreeMain = document.getElementsByClassName('right-content');

// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; 
function addTitle () {
  // a) Recuperar o pai: body declarado no inicio;
  // b) Criar o elemento <h1> com o Texto do título;
  let childH1 = document.createElement('h1');
  childH1.innerText = 'Exercício 5.2 - JavaScript DOM';
  // extra) colocar um id;
  childH1.id = 'title';
  // c) Adicionr o elemento criado no pai
  bodyDad[0].appendChild(childH1);
};
addTitle();


// 2. Adicione a tag main com a classe main-content como filho da tag body ;
function addMain () {
  // a) Recuperar o pai: body declarado no inicio;
  // b) Criar elemento <main> com classe main-content;
  let childMain = document.createElement('main');
  childMain.className = 'main-content';
  // c) Adicionar o elemento criado no pai;
  bodyDad[0].appendChild(childMain)
}
addMain();


// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; 
function addSectionOne () {
  // a) Recuperar o pai: main criado anteriormente e declarado no inicio;
  // b) Criar section com a classe center-content;
  let contentSection = document.createElement('section');
  contentSection.className = 'center-content';
  // c) Adicionar o elemento cirado no pai que é main;
  mainDad[0].appendChild(contentSection);
}
addSectionOne();


// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
function addP () {
  // a) Recuperar o pai: section criada anteriormente e declarada no inicio;
  // b) Criar o elemento <p> e colocar um texto;
  let childP = document.createElement('p');
  childP.innerText = 'Aqui eu vou colocar um texto qualquer pela falta de criatividade';
  // c) Adicionar o elemento criado no pai que é o section do main;
  sectionOneMain[0].appendChild(childP);
}
addP();

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
function addSectionTwo () {
  // a) Recuperar o pai: main já declara no;
  // b) Criar o elemento <section> com a classe left-content;
  let leftSection = document.createElement('section');
  leftSection.className = 'left-content';
  // c) Adicionar o elemento criado no pai main;
  mainDad[0].appendChild(leftSection);
}
addSectionTwo();

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
function addSectionThree () {
  let rightSection = document.createElement('section');
  rightSection.className = 'right-content';
  mainDad[0].appendChild(rightSection);
}
addSectionThree();

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
function addImage () {
  let image = document.createElement('img');
  image.className = 'small-image';
  image.src = 'https://picsum.photos/200';
  sectionTwoMain[0].appendChild(image);
}
addImage();

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
function addList () {
  // a) Criar o elemento ul e adicionar no ái que é o terceiro e ultimo section
  let listNoOrder = document.createElement('ul');
  sectionThreeMain[0].appendChild(listNoOrder);
  // b) Criar um array com os números que devem ser colocados na lista
  const listNumber = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
  // c) colocar os valores dentro da lista;
  for (let num in listNumber) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = listNumber[num];
    listNoOrder.appendChild(elementLi);
  }
}
addList();

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
function addH3 (numH3) {
  // a) Fazer um loop para que o h3 seja criado três vezes;
  for (let i = 0; i < numH3; i += 1) {
    // b) criar o elemento desejado que é o h3;
    const childH3 = document.createElement('h3');
    // c) colocar um texto chamando o index do for para que o loop aconteça;
    childH3.innerText = 'Mostre', numH3[i];
    // d) Adicionar os elementos como filho do main;
    mainDad[0].appendChild(childH3);
  }
}
addH3(3);