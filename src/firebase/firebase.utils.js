import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-8UDR13A5-1-oS1dav44GkA-DQ-_tfS4",
  authDomain: "crwn-db-624a2.firebaseapp.com",
  databaseURL: "https://crwn-db-624a2.firebaseio.com",
  projectId: "crwn-db-624a2",
  storageBucket: "crwn-db-624a2.appspot.com",
  messagingSenderId: "51472587298",
  appId: "1:51472587298:web:2ca0bdac5871fe26cc087b"
};

/*Permite sacar al usuario del objeto que que recuperamos
de nuestra biblioteca de autenticación y luego lo almacenamos
dentro de nuestra base de datos firestore.*/

/*En firestore existe DocumentReference vs CollectionReference,
cuando queramos realizar un CRUD se ocupa DocumentReference */

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; /*Si el usuario no existe */
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  /*Si no existe el usuario en firestore, queremos crear un nuevo registro */
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  /*se retorna el objeto usuario para posteriormente ocupar su información */
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// esto nos da acceso a esta nueva clase de GoogleAuthProvider para autenticación.
const provider = new firebase.auth.GoogleAuthProvider();

// Lo que esto significa es que siempre queremos activar la ventana emergente
// de Google cuando usemos esta autenticación de Google.
provider.setCustomParameters({ prompt: "select_account" });

//Se exporta el inicio de sesión con el método de Google
//que cancela el inicio de sesión emergente
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;