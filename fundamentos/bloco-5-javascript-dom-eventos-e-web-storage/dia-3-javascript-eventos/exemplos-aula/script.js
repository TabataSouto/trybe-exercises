
// caixa de alerta na página (tipo pop-up)
window.onload = jsCarregado;
function jsCarregado(){
  alert("Página foi carregada!");
}

// essa função retorna um "resultado" quando o usuário clica no botão
function maisInfos() {
  let textoMaisInfos = document.getElementById('trybe-continua');
  textoMaisInfos.innerText = 'Aqui você vai aprender Hard Skills, Soft Skill e várias outras habilidades!'
}