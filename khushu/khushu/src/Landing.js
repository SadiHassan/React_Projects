import React from 'react'
import './Landing.css'
import moonImage from './img/moon.jpg'; 
import logo from './img/Khushu.jpg';
import { useHistory, Link } from "react-router-dom";

function Landing() {
    
    let imgSrcOriginal = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
    let imgSrc = "https://media1.s-nbcnews.com/j/newscms/2019_37/3005121/190910-full-moon-ac-1020p_f2429d427c151e74602f31e914fd95a5.fit-760w.jpg"
    const history = useHistory();

    return (
        <div className="background-container">
            <img src={moonImage} alt="" />
            <div className="stars"></div>
            <div className="clouds"></div>
            <div className="ayat">
                <blockquote>
                        <p>
                        O You who have beleived,<br/> 
                        seek help through <span className="highlight">patience</span> and 
                        <span className="highlight"> prayer</span>. <br/>
                        Indeed, Allah is with the patient ...
                        <span className="reference"> ( Quran 2:153 )</span>
                        </p>
                </blockquote>       
            </div>
            <div className="brand__position">
                <div className="logo__slogan">
                    K H U S H U
                </div>
                <div className="tag__line">
                    Rush to success
                </div>
                <Link to="/home">
                    <button className="enter__button" >ENTER</button>
                </Link>
                
            </div>
        </div>
        
        
        
        
        
        
        
        
    )
}

export default Landing
