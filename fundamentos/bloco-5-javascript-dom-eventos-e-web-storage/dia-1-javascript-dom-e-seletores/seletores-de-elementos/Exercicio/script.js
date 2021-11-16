/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()*/

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
document.getElementById('text').innerText = 'Em dois anos, graças ao esforço e apoio da Trybe, espero ser profissionalmente sucedida e com ainda mais conhecimento.'

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.getElementsByTagName('main')[0].style.backgroundColor = 'rgb(76,164,109)';

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

// 4. Crie uma função que corrija o texto da tag <h1>.
document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript'

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
document.getElementsByTagName('p')[0].style.textTransform = 'uppercase';
textTransform