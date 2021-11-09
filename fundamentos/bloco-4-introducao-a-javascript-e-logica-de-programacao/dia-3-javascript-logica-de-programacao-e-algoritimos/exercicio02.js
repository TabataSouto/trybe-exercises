var n = 4;
var aux = "";

for (var linha = 1; linha <= n; linha++) {
  for (var coluna = 1; coluna <= n; coluna++) {
    aux += "*";
  }

  console.log(aux);
  aux = "";

}