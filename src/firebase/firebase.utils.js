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
