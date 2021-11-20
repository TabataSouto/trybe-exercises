const paragraph = document.getElementById("paragraph");
paragraph.style.color = "white";

// 1. Adicione uma classe igual para os dois parágrafos.
const classP = document.getElementsByTagName('p');
for (let i = 0; i < classP.length; i += 1) {
  classP[i].className = 'myp';
}

// 2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
document.getElementsByClassName('myp');

// 3. Altere algum estilo do primeiro deles.
const styleP = document.getElementsByTagName('p')[0];
styleP.style.backgroundColor = '#8783D1'
styleP.style.border = 'double #ffffff';
styleP.style.display = 'inline';
styleP.style.padding = '5px';

// 4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
const subTitle = document.getElementsByTagName('h4')[0];
subTitle.style.color = 'rgb(170, 154, 186)';