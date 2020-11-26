import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import './Home.css'

function Home() {
    return (
        <div className = "home__container">
            <Header />
            <Body />
            <Footer />    
        </div>
    )
}

export default Home
