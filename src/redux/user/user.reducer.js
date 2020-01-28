/*Un reductor es en realidad solo una función que obtiene dos propiedades, 
obtiene un objeto de estado que representa el último estado o un estado inicial,
y luego recibe una acción que la acción es solo un objeto que tiene un tipo que
es un valor de cadena.*/

/*Representa el estado inicial de este reductor muy similar a cuando instanciamos
el estado en una clase*/
const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;