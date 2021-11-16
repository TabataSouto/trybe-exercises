// Para praticar, substitua todas as funções que você usou no exercício anterior por querySelector e/ou querySelectorAll .

// 1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.querySelector('#page-title').innerText = 'Final Fantasy VII: Advent Children';

// 2 Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
const paragraph = document.querySelector('#second-paragraph');
paragraph.style.padding = '10px';
paragraph.style.display = 'inline';
paragraph.style.backgroundColor = 'blue';
paragraph.style.color = 'white';

// 3. Por fim, recupere o subtítulo e altere-o também.
document.querySelector('#subtitle').innerText = 'Muito legal!';

//4 -Adicione uma classe igual para os dois parágrafos e recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName: altere algum estilo do primeiro deles
let books = document.querySelector('.meus-livros').style.color = 'green';

//. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
document.querySelectorAll('h4')[1].style.color = 'gray';