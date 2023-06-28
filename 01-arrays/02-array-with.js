const state = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
  {
    id: 3,
    name: "Flash",
  },
  {
    id: 4,
    name: "Aquaman",
  },
];

const index = 1;
const newName = "Green Lantern";

//! Forma antigua
  // const newState = state.map((hero, i) => {
  //   if (i === index) {
  //     hero.name = newName;
  //   }

  //   return { ...hero };
  // });

  
  //! con Array with
  // * Array with es una funcion que recibe un array y devuelve un nuevo array con los mismos elementos
  const newState = state.with(index, { 
    ...state.at(index), // copia el objeto en esa posicion
    name: newName
  })
  
  state[0].name = "Volcan negro";
  console.table(newState);

  console.log('El ultimo Heroe', state.at(-1)); //! Esto imprime el ultimo elemnto del array