import React from 'react'
import './Login.css'
import moonImage from './img/moon.jpg'; 

function Login() {
    
    let imgSrcOriginal = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
    let imgSrc = "https://media1.s-nbcnews.com/j/newscms/2019_37/3005121/190910-full-moon-ac-1020p_f2429d427c151e74602f31e914fd95a5.fit-760w.jpg"
    
    return (
        <div className="background-container">
            <img src={moonImage} alt="" />
            <div className="stars"></div>
            <div className="clouds"></div>
            <div className="ayat">
                <blockquote>
                        <p>
                        O You who have beleived,<br/> 
                        seek help through patience and prayer. <br/>
                        Indeed, Allah is with the patient ...
                        <span> ( Quran 2:153 )</span>
                        </p>
                </blockquote>       
            </div>
            <div>
                <button className="enter__button">ENTER</button>
            </div>
            
        
        {/* 
            
            <p>
                        O YOU WHO HAVE BELEIVED,<br/> 
                        SEEK HELP THROUGH PATIENCE AND PRAYER. <br/>
                        INDEED, ALLAH IS WITH THE PATIENT.
                        (Quran 2:153)
                        </p>    
                
                
                
                
                
            </div>
        </div>
        */}
        </div>
        
        
        
        
        
        
        
        
    )
}

export default Login
