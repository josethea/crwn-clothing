/*Actions son solo funciones que devuelven objetos.
Cada objeto tiene el formato correcto que se espera que tenga la acción.*/
export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  payload: user
});
