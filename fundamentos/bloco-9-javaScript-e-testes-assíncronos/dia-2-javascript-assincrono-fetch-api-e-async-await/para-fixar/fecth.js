// Ao rodar esse código, nota-se que no console foi impresso Promise { <pending> } ao invés da piada(joke). Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu estado e não o dado requisitado.
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  // corrigindo o problema, no caso, o retorno Promise { <pending> };
  // comentar o console.log() => console.log(fetch(url));
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    // E ser der erro em alguma requisição? O que você pode fazer em relação a isso? Agora entra o .catch()
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// caso algo esteja errado com a UTL:
// Algo deu errado :( 
// TypeError: Only absolute URLs are supported