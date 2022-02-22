const Redux = require('redux');

// --- O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store.
// --- Inicialmente o state vem como undefined, então iremos atribuir a ele um valor padrão.

// const reducer = (state = { login: false, email: "" }) => {
//   return state;
// }

// // Primeiro vamos criar e retornar a nossa store :
// const store = Redux.createStore();


// --- Mas o que acontece se nosso valor inicial (que podemos chamar de estado inicial) ficar muito grande? Nosso código vai ficar "bagunçado" né?! Então podemos reescrevê-lo.
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
  return state;
}

const store = Redux.createStore(reducer);

// --- Nosso reducer está montado e possui o nosso estado inicial da aplicação. Vamos verificar o output quando acessamos a store com a função getState() .
console.log(store.getState());
