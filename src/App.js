import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SingInAndSingUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";

import { auth } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

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

    this.unSubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SingInAndSingUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
