//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 4;
let l = " ";

for (let i = 0; i < n; i += 1) { //adição dos asteriscos
  l = l + "*";
  /*console.log("teste1")*/  
} 

for (let i2 = 0; i2 < n; i2 += 1) { //adição das linhas com asteriscos, ele repete o resultado do n do primeiro for.
  
  /*console.log("teste2")*/
  console.log(l);
}
