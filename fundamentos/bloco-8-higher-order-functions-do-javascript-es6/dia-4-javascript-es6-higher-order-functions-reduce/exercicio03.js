const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
  // ----------- Feito primeiro dessa forma
  // const calcMediaAge = books.map((age) => age.releaseYear - age.author.birthYear);
  // const mediaAge = calcMediaAge.reduce((acc, media)=> Math.round(acc + media / calcMediaAge.length), 0)
  // return mediaAge;

  // ------------- segunda forma de se fazer
  const booksSize  = books.length;
  const calcMediaAge = books.reduce((acc, caclMedia) => acc + (caclMedia.releaseYear - caclMedia.author.birthYear) / booksSize, 0);
  return Math.round(calcMediaAge);
}

console.log(averageAge()); //43