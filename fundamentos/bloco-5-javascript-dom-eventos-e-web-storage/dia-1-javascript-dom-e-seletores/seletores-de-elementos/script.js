// const paragraph = document.getElementById("paragraph");
//       paragraph.style.color = "red";

// 1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById('page-title').innerText = 'Final Fantasy VII: Advent Children';

// 2 Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
const paragraph = document.getElementById('second-paragraph');
paragraph.style.padding = '15px';
paragraph.style.display = 'inline';
paragraph.style.backgroundColor = 'blue';
paragraph.style.color = 'white';

// 3. Por fim, recupere o subtítulo e altere-o também.
document.getElementById('subtitle').innerText = 'Muito legal!';