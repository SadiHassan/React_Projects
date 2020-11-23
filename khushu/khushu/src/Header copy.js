import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
function Header() {
    let navToggle = document.querySelector(".nav__toggle");
    let navWrapper = document.querySelector(".nav__wrapper");

    navToggle.addEventListener("click", function () {
    if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
    } else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
    }
    });
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo__slogan">
                    K H U S H U
                </div>
                <div className="header__tag__line">
                    Rush to success
                </div>
            </div>
            <div className="header__right">
                <Link to="/lectures">
                    <button className="header__link__button">Lectures</button>
                </Link>
                <Link to="/books">
                    <button className="header__link__button">Books</button>
                </Link>
                <Link to="/feedback">
                    <button className="header__link__button">Feedback</button>
                </Link>
                <Link to="/login">
                    <button className="header__login__button">Login / Signup</button>
                </Link>
                
                
                
            </div>
        </div>
    )
}

export default Header
