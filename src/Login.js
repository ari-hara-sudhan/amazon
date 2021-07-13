import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import "./Login.css"
import {useHistory} from "react-router-dom"
function Login() {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState();
    const history =useHistory();

   

    const login =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{

            history.push("/");
        
        }).catch((error)=>alert(error.message))
    }
    const register =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push("/");

        }).catch((error)=>alert(error.message))


    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://howtoworkonline.org/wp-content/uploads/2015/12/Amazon-logo.jpg" alt="amazon-logo"/>

            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                <h5>E-mail</h5>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="text"/>
                <h5>password</h5>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                <Button onClick={login} type="submit">SignIn</Button>

                </form>
                <p>
                    By signin you need to agree the terms and policy
                </p>
                <Button onClick={register}>Create your amazon Account</Button>
                

            </div>
            
        </div>
    )
}

export default Login
