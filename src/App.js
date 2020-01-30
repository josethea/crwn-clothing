import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

/*connect es un componente de orden superior,
eso nos permite modificar nuestro componente
para tener acceso a cosas relacionadas con redux.*/
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unSubscribeFormAuth = null;

  componentDidMount() {
    /*
    Es un sistema de mensajería abierto entre nuestra aplicación y 
    nuestro firebase, en cualquier momento que ocurran cambios en firebase
    desde cualquier fuente relacionada con esta aplicación,
    Firebase envía un mensaje que dice que el currentUser se ha actualizado.
    
    Por lo tanto, no tenemos que buscar manualmente cada vez 
    que queremos verificar si ese estado cambió.

    Y como es una suscripción abierta, también tenemos que cerrar
    las suscripciones, porque no queremos cualquier pérdida 
    de memoria en nuestra aplicación javascript, por ello
    se crea la propiedad "unSubscribeFormAuth" que esta arriba.
    */

    const { setCurrentUser } = this.props;

    this.unSubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      /*Si el usuario esta autenticado (inicio sesión) */
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        /*Todo lo referente a Snapshot es solo para consultar y/o verificar si existe algo*/
        userRef.onSnapshot(snapShot => {
          /*El método data obtiene todos los atributos del objeto guardados en firestore*/
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    /*
    Queremos llamar a este método para llamar a la suscripción desde fuera
    y eso cerrará la suscripción.
    
    Así manejamos nuestra aplicación siendo conscientes de cualquier
    cambio de autenticación en firebase.
    */
    this.unSubscribeFormAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            erxact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

/*Es una función que obtiene esta propiedad de envío*/
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
