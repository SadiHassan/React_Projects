import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then( (result) => {
                console.log(result);
            })
            .catch((error) => {
                alert(error.message)
            });
    }

    return (
        <div className = "login">
            <div className = "login__container">
                <img src = "https://lh3.googleusercontent.com/proxy/v7hfDu_duqQOfmkzuDho5ezO80AJlVqUSZn8bzbqeS4mw11eb_YbIURYrJivwvmGYbjxuJ26cAOobzmzuc-EClDHJRbSa8oNmi5ZPYKgeXtQbSuyDoD1IBaSZK4"
                alt = ""/>
                <h1>Sign in to Hudai Alap!</h1>
                <p>This is a site for hudai chat</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>    
        </div>
    )
}

export default Login
