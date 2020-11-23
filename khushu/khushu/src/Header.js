import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
function Header() {
    var navToggle = ''
    var navWrapper = ''
    document.onload = () => {
        navToggle = document.querySelector(".nav__toggle");
        navWrapper = document.querySelector(".nav__wrapper");
    }
    navToggle.addEventListener("click", function () {
    alert("clicked!");
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
        
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
          <a href="#" className="brand">Brand</a>
        </div>
        <div className="site-header__middle">
          <nav className="nav">
            <button className="nav__toggle" aria-expanded="false" type="button">
              menu
            </button>
            <ul className="nav__wrapper">
              <li className="nav__item"><a href="#">Home</a></li>
              <li className="nav__item"><a href="#">About</a></li>
              <li className="nav__item"><a href="#">Services</a></li>
              <li className="nav__item"><a href="#">Hire us</a></li>
              <li className="nav__item"><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="site-header__end">
          <a className="button" href="#">Sign in</a>
        </div>
      </div>
    </header>
    
    )
}

export default Header
