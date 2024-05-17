import classes from './Login.module.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"; 

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const returnToLanding = () => {
        navigate("/");
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        const dataToSend = {
            username: username,
            password: password
        }

        const response = await fetch("http://localhost:3001/user/existing",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            })

        const data = await response.json();

        // console.log(data);
    }

    return (
        <div className={classes.container}>
            <h1 className = {classes.title}>Welcome Back!</h1>
            <h2 className = {classes.subtitle}>Log in to continue</h2>
            <form className = {classes.form} onSubmit={(event) => handleLogin(event)}>
                <div className = {classes.usernamePassword}>
                {/* <p>Username:</p> */}
                    <input
                        className = {classes.loginSignupInput}
                        type="text"
                        placeholder='Username'
                        onChange={(event) => setUsername(event.target.value)}>
                    </input>
                    <FaIcons.FaUser className={classes.loginSignupInputIcon} />
                </div>
                <div className = {classes.usernamePassword}>
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
                    <input type="submit" value="Login" className={classes.logIn}></input>
                    {/* <input value="Sign Up" className={classes.signUp} onClick={() => }></input> */}
                    {/* <button onClick = {returnToLanding}>Go Back</button> */}
                    <h2 className = {classes.forgotPassword}>FORGOT PASSWORD?</h2>
                </div>
            </form>
        </div>
    )
}

export default Login; 