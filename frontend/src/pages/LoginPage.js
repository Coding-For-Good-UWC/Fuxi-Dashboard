import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './LoginPage.module.css';
import Login from '../components/Login';
import WomanFlipped from '../assets/WomanFlipped.png'
// import Login from

function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLogin, setIsLogin] = useState(false); // is it login or signup? 

    const returnToLanding = () => {
        navigate("/");
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        const dataToSend = {
            username: username,
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

    return (
        <div className={classes.container}>
                    {/* <input type="submit" value="Login" className={classes.logIn}></input>
                    <input type="submit" value="Sign Up" className={classes.signUp}></input> */}

          
            <div className = {classes.leftContainer}>
                { !isLogin && <Login></Login> }
                { isLogin && <div>THIS IS THE SIGNUP COMPONENT</div> }
                <button className = {classes.toggleLoginSignup} onClick={() => setIsLogin(!isLogin)}>{`${isLogin ? "Log in" : "Sign up"} instead`}</button>
            </div>
            <div className = {classes.rightContainer}>
                <img onClick = {returnToLanding} className = {classes.woman} src={WomanFlipped}></img>
            </div>
        

            
        </div>
    )
}

export default LoginPage; 