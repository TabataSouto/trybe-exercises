// 1. colocar o background color no rgb da trybe em id header-container;
const bgHeader = document.getElementById('header-container');
bgHeader.style.backgroundColor = '#33CA7F';

// 2. na classe emergency-tasks colocar bg salmão, e na classe no-emergency-tasks na esquerda e bg amarelo na direita;
const bgEmergency = document.querySelector('.emergency-tasks');
bgEmergency.style.backgroundColor = '#FBD1A2';

const bgNoEmergency = document.getElementsByClassName('no-emergency-tasks');
bgNoEmergency[0].style.backgroundColor = '#ECE4B7';

// 3. colocar bg purple no h3 da esquerda e black na direita;
const bg1H3 = document.querySelectorAll('.emergency-tasks div h3');
for (let i = 0; i < bg1H3.length; i += 1) {
  bg1H3[i].style.backgroundColor = '#A491D3';
}

const bg2H3 = document.querySelectorAll('.no-emergency-tasks div h3');
for (let i = 0; i < bg2H3.length; i += 1) {
  bg2H3[i].style.backgroundColor = '#222223';
}

// 4. colocar bg verde musgo no class footer-container
const footer = document.getElementsByTagName('footer');
footer[0].style.backgroundColor = '#1C3738';
footer[0].style.color = 'white';
footer[0].style.padding = '10px';
