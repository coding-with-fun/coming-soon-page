import React from "react";
import Logo from "../assets/logo.png";

const Body = () => {
    return (
        <div className="body__container">
            <div className="img__container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="details">Coming Soon</div>
        </div>
    );
};

export default Body;
