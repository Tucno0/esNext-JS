
const superHeros = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
  },
  {
    id: 3,
    name: 'Flash',
  },
  {
    id: 4,
    name: 'Aquaman',
  }
];

// const array2 = JSON.parse(JSON.stringify(superHeros)); // Es una forma antigua de clonar el objeto original sin modificarlo aunque tenga objetos anidados

// const superHeroesCopy = [...superHeros] // Esto crea una copia del objeto original pero si tiene objetos anidados, estos se modifican
// superHeroesCopy[0].name = 'Ironman'; // Esto modifica el objeto original, solo se debe utilizar para objetos simples o primitivos

const superHeroesCopy = structuredClone(superHeros); // Es una forma de clonar el objeto original sin modificarlo aunque tenga objetos anidados
superHeroesCopy[0].name = 'Ironman'; // Esto no modifica el objeto original

console.table(superHeros);
console.table(superHeroesCopy);