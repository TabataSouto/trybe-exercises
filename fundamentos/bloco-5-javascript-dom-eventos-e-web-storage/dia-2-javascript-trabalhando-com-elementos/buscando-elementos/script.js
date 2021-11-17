// Acesse o elemento elementoOndeVoceEsta .
//console.log(document.querySelector('#elementoOndeVoceEsta'))
document.querySelector('#elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// parentNode e parentElement são propriedades que retornam elemento/nó pai
//console.log(document.querySelector('#elementoOndeVoceEsta').parentElement.style.backgroundColor = '#7180AC')
document.querySelector('#elementoOndeVoceEsta').parentElement.style.backgroundColor = '#7180AC';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// console.log(document.getElementById('primeiroFilhoDoFilho').innerText = 'Alterando o texto!')
document.getElementById('primeiroFilhoDoFilho').innerText = 'Alterando o texto!'

// Acesse o primeiroFilho a partir de pai .
// console.log(document.getElementById('pai').firstElementChild)
document.getElementById('pai').firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// previousSibling e previousElementSibling são propriedades que retorna o elemento/nó anterior
// console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)
document.getElementById('elementoOndeVoceEsta').previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// nextSibling e nextElementSibling retorna o próximo nó/elemento.
// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)
document.getElementById('elementoOndeVoceEsta').nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);


// Agora acesse o terceiroFilho a partir de pai .
// console.log(document.getElementById('pai').);
