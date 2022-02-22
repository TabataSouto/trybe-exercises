// --- Mas e se precisarmos alterar o dado que está no estado? A peça que tem esta função é a action ! Uma action é um objeto JavaScript que tem pelo menos uma propriedade type e é responsável por comunicar ao reducer uma mudança a ser feita na store . Em Redux nós utilizamos o actionCreator , que nada mais do que uma função que retorna uma action . Para o nosso exemplo, iremos usar uma actionCreator chamada fazerLogin . Esta função irá enviar uma action ao nosso reducer , com a intenção de alterar para verdadeiro a chave login da nossa store.

const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

// --- Note, também, que o reducer retorna todo o estado , e não somente o que será modificado
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        // --- Retornamos, então, um objeto que contém todos os dados atuais do estado { ...state } mais as chaves que serão modificadas pela action
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
    return state;
  };
};

const store = Redux.createStore(reducer);

// --- Conseguimos mudar o estado da store utilizando o dispatch . Ele despacha nossa action para dentro do reducer , para que nosso estado seja alterado.
store.dispatch(fazerLogin("tabatac.souto@gmail.com"));

console.log(store.getState());
