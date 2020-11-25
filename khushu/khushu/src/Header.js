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
      let navToggle2 = document.querySelector(".nav__toggle");
      navWrapper = document.querySelector(".nav__wrapper");
      if (navWrapper.classList.contains("active")) {
        navToggle2.setAttribute("aria-expanded", "false");
        navToggle2.setAttribute("aria-label", "menu");
        navToggle2.classList.toggle("change")
        navWrapper.classList.remove("active");
      } else {
          navWrapper.classList.add("active");
          navToggle2.setAttribute("aria-label", "close menu");
          navToggle2.setAttribute("aria-expanded", "true");
          navToggle2.classList.toggle("change")
      }
      };
    
    
    return (
        
    <header className="site-header">
      
      <div className="wrapper site-header__wrapper">
        
        <div className="site-header__start">
          <div className="brand">KHUSHU</div>
          <div className="header__tag__line">Rush to success</div>
        </div>
        
        <div className="site-header__middle">
          <nav className="nav">
            <button className="nav__toggle" aria-expanded="false" type="button" onClick = {navToggle}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </button>
            <ul className="nav__wrapper">
              <Link style={{ textDecoration: 'none', listStyleType: 'none' }} to="/lectures">
                <li className="nav__item"><a href="#">Lectures</a></li>
              </Link>

              <Link style={{ textDecoration: 'none', listStyleType: 'none' }} to="/books">
                <li className="nav__item"><a href="#">Books</a></li>
              </Link>
              
              <Link style={{ textDecoration: 'none', listStyleType: 'none' }} to="/feedback">
                <li className="nav__item"><a href="#">Feedback</a></li>
              </Link>
              
            </ul>
          </nav>
        </div>
        
        
        <div className="site-header__end">
          <button className="button">Login / Join</button>
        </div>
      
      </div>
    </header>
    
    )
}

export default Header
