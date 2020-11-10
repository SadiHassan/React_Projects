import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase' /* importing from local firebase */

function Login(){

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => 
        alert(error.message));
    }

    return (
        <div className = 'login'>
            <div className = "login__logo">
                <img src="https://cybernews.com/wp-content/uploads/2020/07/Discord-privacy-tips-that-you-should-use-.jpg" 
                alt=""/>
            </div>
            <Button onClick={signIn}> Sign In</Button>
        </div>

        
    )
}

export default Login