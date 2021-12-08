// Crie um irmão para elementoOndeVoceEsta .
// Passo a passo para criar um irmão
function brother() {
  // 1. Recuperar o elemento onde queremos criar o novo irmão
  const element = document.querySelector('#pai');
  // 2. Criar o elemento desejado
  const newBrother = document.createElement('section');
  newBrother.id = 'irmaoelementoOndeVoceEsta';
  // 3. Adicionar o irmão dentro do html, no caso, adicionar no pai o irmão do elementoOndeVoceEsta
  element.appendChild(newBrother);
}
brother();

// Crie um filho para elementoOndeVoceEsta .
// Passo a passo para criar um filho
function child () {
  // 1 Recuperar o elemento onde queremos criar o filho
  const element = document.getElementById('elementoOndeVoceEsta');
  // 2. Criar o elemento desejado;
  const elementChild = document.createElement('section');
  elementChild.id = 'terceiroEUltimoFilgoDoFilho'
  // 3. Adicionar o filho dentro do html
  element.appendChild(elementChild);
}
child();

// Crie um filho para primeiroFilhoDoFilho .
// Passo a passo para criar um filho
function childOfChild () {
  // 1. Recuperar o elemento onde queremos criar o filho, no caso, será recuperado o elemento primeiroFilhoDoFilho;
  const element = document.getElementById('primeiroFilhoDoFilho');
  // Criar o elemento desejado, ou seja, o filho
  const elementChild = document.createElement('section');
  elementChild.id = 'primeiroFilhoDoPrimeiroFilhoDoFilho';
    // 3. Adicionar o filho dentro do html. No caso, vou adicionar no elemento pai (element) o elemento filho (elementChild)
  element.appendChild(elementChild);
}
childOfChild();

// A partir desse filho criado, acesse terceiroFilho 
//Passo a passo
function acessThirdChild () {
  // 1. Recuperar a partir de qual elemento irei acessar o terceiro fiho, que no caso, será o filho criado anteriormente.
  let element = document.getElementById('primeiroFilhoDoPrimeiroFilhoDoFilho')
  .parentElement.parentElement.nextElementSibling;
  // 2. Acessaro terceiro filho
}

acessThirdChild();