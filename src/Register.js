import React, { useState } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from "react-router-dom";
import { auth,firestore } from "./Firebase";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const [ fullName, setFullName] = useState('');
    const [email, setEmail]= useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
               if(auth){
                firestore.collection('users').doc(auth.user.uid).set({
                    fullName: fullName,
                    email: email,
                })
                navigate('/');
               }
            })
            .catch(error=> alert(error.message));
            
    }

    return (
        <div className="register">
            <Link to="/" style={{textdecoration:"none"}} >
            <div className="register_logo">
                <StorefrontIcon className="register__logoImage" fontsize="large"/>
                <h2 className=" register__logoTitle">SHOP</h2>
            </div>
            </Link>
            <div className="register__container">
                <h1> Create your Account</h1>
                <form>
                    <h5> Full Name:</h5>
                    <input type='text' value={fullName} onChange={e=> setFullName(e.target.value)}/>
                    <h5>E-mail:</h5>                
                    <input type='email' value={email} onChange={e=> setEmail(e.target.value)}/>
                    <h5> Password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button onClick={register} className="register__registerButton">Create your Account</button>
                </form>
                <p>
                By creating an account you agree to our terms and conditions.
                </p>
                <Link to="/login">
                    <button className="register__loginButton">Sign into your Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Register;
