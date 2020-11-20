import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {

    const [ state, dispatch ] = useStateValue()
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then( (result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
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
                <h1>কাউয়া</h1>
                <p>হুদাই আড্ডা বাজি ... অবিরাম!!</p>
                <Button onClick={signIn}>আসেন আসেন</Button>
            </div>    
        </div>
    )
}

export default Login
