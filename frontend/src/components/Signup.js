 import classes from './Signup.module.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"; 

function Signup() {
    const navigate = useNavigate;

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async(event) => {
        event.preventDefault();

        const dataToSend = {
            username: username,
            email: email,
            password: password
        }

        const response = await fetch("http://localhost:3001/user/new",
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })

    const data = await response.json();

    console.log(data);

    }

    return(
        <div className={classes.container}>
            <h1 className = {classes.title}>Create an Account</h1>
            <h2 className = {classes.subtitle}>Sign up as an institution</h2>
            <form className = {classes.form} onSubmit={(event) => handleSignup(event)}>
                <div className = {classes.usernamePasswordEmail}>
    
                    <input
                        className = {classes.loginSignupInput}
                        type="text"
                        placeholder='Username'
                        onChange={(event) => setUsername(event.target.value)}>
                    </input>
                    <FaIcons.FaUser className={classes.loginSignupInputIcon} />
                </div>

                <div className = {classes.usernamePasswordEmail}>
    
                    <input
                        className = {classes.loginSignupInput}
                        type="text"
                        placeholder='Email'
                        onChange={(event) => setEmail(event.target.value)}>
                    </input>
                    <FaIcons.FaEnvelope className={classes.loginSignupInputIcon} />
                </div>

                <div className = {classes.usernamePasswordEmail}>
                    {/* <p>Password:</p> */}
                    <input
                        className = {classes.loginSignupInput}
                        type="password"
                        placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)}>
                    </input>
                    <FaIcons.FaLock className = {classes.loginSignupInputIcon}></FaIcons.FaLock>
                </div>

                <div className={classes.buttons}>
                    <input type="submit" value="Sign Up" className={classes.signUp}></input>
                    {/* <input value="Sign Up" className={classes.signUp} onClick={() => }></input> */}
                    {/* <button onClick = {returnToLanding}>Go Back</button> */}
                    {/* <h2 className = {classes.forgotPassword}>FORGOT PASSWORD?</h2> */}
                </div>
            </form>
        </div>
    )

}

export default Signup