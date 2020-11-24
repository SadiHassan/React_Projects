import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
function Header() {
    //var navToggle = ''
    var navWrapper = ''
    document.onload = () => {
        //navToggle = document.querySelector(".nav__toggle");
        navWrapper = document.querySelector(".nav__wrapper");
    }

    const navToggle = () => {
      //navToggle.addEventListener("click", function () {
      //alert("clicked!");
      let navToggle2 = document.querySelector(".nav__toggle");
      navWrapper = document.querySelector(".nav__wrapper");
      if (navWrapper.classList.contains("active")) {
        navToggle2.setAttribute("aria-expanded", "false");
        navToggle2.setAttribute("aria-label", "menu");
          navWrapper.classList.remove("active");
      } else {
          navWrapper.classList.add("active");
          navToggle2.setAttribute("aria-label", "close menu");
          navToggle2.setAttribute("aria-expanded", "true");
      }
      };
    
    
    return (
        
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
          <a href="#" className="brand">Brand</a>
        </div>
        <div className="site-header__middle">
          <nav className="nav">
            <button className="nav__toggle" aria-expanded="false" type="button" onClick = {navToggle}>
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
