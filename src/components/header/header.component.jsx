import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

/*connect es un componente de orden superior,
eso nos permite modificar nuestro componente
para tener acceso a cosas relacionadas con redux.*/
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo " />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {/*si es un objeto currentUser es TRUE */

      currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

/*Será la función que nos permita acceder a los estados */

/*
Esta es otra manera de acceder al store, 
se destructura como user, para que se evite poner state

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
}); */

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);