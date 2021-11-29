const estado = document.querySelector('#estado')

// // Loop para criação dos options estado
function createOptions () {
  for (let i = 0; i < 27; i += 1) {
    const option = document.createElement('option');
    estado.appendChild(option);
  }
}
createOptions();

// Colocar estados no selected
function selectedEstados () {
  const options = document.querySelectorAll('option')
  for (let i = 0; i < options.length; i += 1) {
    for (let i = 1; i < objEstados.length; i += 1) {
      options[i].innerText = objEstados[i].name;
      options[i].value = objEstados[i].value;
    }
  }
}
selectedEstados();
