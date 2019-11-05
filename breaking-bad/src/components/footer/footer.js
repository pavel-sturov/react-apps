import React from "react";

import "./footer.css";
import logo from "../../img/gh2.png"

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <a href="https://github.com/pavel-sturov"> </a>
                <img src={logo} alt="logo"/>
            </div>
            <div className="footer-wrapper">
                <div className="footer-item">Characters: 63</div>
                <div className="footer-item">Episodes: 102</div>
                <div className="footer-item">Quotes: 70</div>
                <div className="footer-item">Death Count: 271</div>
            </div>
        </footer>
        )
};
export default Footer;