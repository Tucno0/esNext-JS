//!Los metodos to son metodos que no modifican el array original, sino que devuelven una copia del array modificado

const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
// heroes.sort()

const deletedheroes = heroes.splice(0, 2, 'Green lantern'); // Esto modifica el array original
// const deletedheroes = heroes.toSpliced(0, 1, 'Green lantern'); // Esto no modifica el array original

// const heroesCopy = heroes;

// heroes.reverse();

// const sortedHeroes = heroes.toSorted(); // Esto copia el array y lo ordena, no modifica el original
// const reversedHeroes = heroes.toReversed()


console.table(heroes);
// console.table(sortedHeroes);
// console.table(reversedHeroes);
console.table(deletedheroes);