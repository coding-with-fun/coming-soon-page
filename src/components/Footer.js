import React from "react";

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="harsh__container">
                Made with{" "}
                <span>
                    <i className="fas fa-heart"></i>
                </span>{" "}
                and{" "}
                <span>
                    <i className="fas fa-mug-hot"></i>
                </span>{" "}
                by{" "}
                <a href="https://github.com/harsh2124" target="blank">
                    Harsh Patel
                </a>{" "}
                at{" "}
                <a href="https://github.com/arc-coder" target="blank">
                    Arc Coder
                </a>
            </div>

            <hr />

            <div className="radhika__container">
                Logo designed by{" "}
                <a
                    href="https://instagram.com/fashion_illustration98"
                    target="blank"
                >
                    Radhika Somani
                </a>
            </div>
        </div>
    );
};

export default Footer;
