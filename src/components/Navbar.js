import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <div className="navbar__container">
            <img src={Logo} alt="Logo" />
            <div className="logo">Arc Coder</div>
        </div>
    );
};

export default Navbar;
