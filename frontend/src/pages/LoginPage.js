import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage()
{
    const navigate = useNavigate();

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    const returnToLanding = () =>
    {
        navigate("/");
    }

    const handleLogin = async (event) => 
    {
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

        console.log (data);
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={(event) => handleLogin(event)}>
                <p>Username:</p>
                <input 
                    type="text"
                    placeholder='username'
                    onChange={(event) => setUsername(event.target.value)}>
                </input>
                <p>Password:</p>
                <input 
                    type="password"
                    placeholder='password'
                    onChange={(event) => setPassword(event.target.value)}>    
                </input>
                <input type="submit" value="Login"></input>
                <button onClick = {returnToLanding}>Go Back</button>
            </form>
        </div>
    )
}

export default LoginPage; 