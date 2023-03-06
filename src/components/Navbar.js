import React from "react";
import logo from "../images/logo.svg"

function Navbar(){
    return(
        <nav className="nav">
            <img src={logo}  alt="Meme Generator Logo"/>
            <h1 className="logo-name">Meme Generator</h1>
        </nav>
    )
}

export default Navbar;