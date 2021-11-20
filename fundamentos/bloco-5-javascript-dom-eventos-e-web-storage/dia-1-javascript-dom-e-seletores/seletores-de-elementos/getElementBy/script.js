const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red"

// 1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
const title = document.getElementById('page-title');
title.innerText = 'Final Fantasy VII: Advent Children';

// 2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
const secondParagraph = document.getElementById('second-paragraph');
secondParagraph.style.display = 'inline';
secondParagraph.style.backgroundColor = '#E3B9BC';
secondParagraph.style.padding = '15px';

// 3. Por fim, recupere o subtítulo e altere-o também.
const subTitle = document.getElementById('sub-title');
subTitle.innerText = 'Apenas para teste!'