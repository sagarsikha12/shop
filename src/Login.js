import "./Login.css";
import React, { useState } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from "react-router-dom";
import {auth} from "./Firebase";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail]= useState('');
    const [password,setPassword]=useState('');
    const history=useNavigate();
    const signIn = e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history('/');
            })
            .catch(error=> alert(error.message));
    }

  
  return (

    <div className="Login">
        <Link to="/" style={{textdecoration:"none"}} >
        <div className="login_logo">
            <StorefrontIcon className="login__logoImage" fontsize="large"/>
            <h2 className=" login__logoTitle">SHOP</h2>
        </div>
        </Link>
        <div className="login__container">
            <h1> Sign-in</h1>
            <form>
                <h5>E-mail</h5>                
                <input type='email' value={email} onChange={e=> setEmail(e.target.value)}/>
                <h5> Password</h5>
               < input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                <button onClick={signIn} type="submit" className="login__signInButton">Sign In</button>
            </form>
            <p>
            By signing in you agree to our terms and conditions.
            </p>
            <Link to="/register" style={{textDecoration:"none"}}>

            <button   className="login__registerButton">Create your Account</button>
            </Link>
        </div>
    </div>
  )
}

export default Login