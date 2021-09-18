import React from "react";

import "./NavBar.scss";

function NavBar(props) {
    return (
      <div className="navbar">
        <h1 className="navbar__title">{props.title}</h1>
        <nav>
          <ul className="navbar__nav">
            {props.children}
            {props.loggedIn && !props.loginError && <li>Hola, {props.username}</li>}
            {!props.loggedIn && <li>Iniciar Sesion</li>}
          </ul>  
        </nav> 
      </div>
    );
}

export default NavBar;

