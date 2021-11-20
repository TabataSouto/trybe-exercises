// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName() ok

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText() {
  let text = document.getElementsByTagName('p')[1];
  text.innerText = 'Em dois anos espero ser profissionalmente bem sucedida!';
}

changeText();

// 2. Crie uma função que mude a cor do quadrado amarelo (classe main-content) para o verde da Trybe (rgb(76,164,109)).
function changeBgYellow () {
const bgMain = document.getElementsByClassName('main-content')[0];
bgMain.style.backgroundColor = 'rgb(76,164,109)';
}

changeBgYellow();

// 3. Crie uma função que mude a cor do quadrado vermelho (classe center-content) para branco.
function changeBgRed () {
  const bgSection = document.getElementsByTagName('section')[0];
  bgSection.style.backgroundColor = 'white';
}

changeBgRed();

// 4. Crie uma função que corrija o texto da tag <h1>.
function correctH1 () {
const titleH1 = document.getElementsByClassName('title')[0];
titleH1.innerText = 'Exercício 5.1 - JavaScript';
}

correctH1();

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function modifyTextP () {
const letterUp = document.getElementsByTagName('p');
letterUp[2].style.textTransform = 'uppercase';
}

modifyTextP();

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function displayP () {
  const allP = document.getElementsByTagName('p');
  for (let i = 0; i < allP.length; i += 1) {
    console.log(allP[i].innerHTML);
  }
}

displayP();