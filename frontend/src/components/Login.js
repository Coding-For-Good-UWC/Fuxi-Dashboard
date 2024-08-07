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
        <div className="flex flex-col items-start justify-center">
            <h1 className="text-left text-5xl">Welcome Back!</h1>
            <h2 className="text-left mt-1 mb-12 text-xl">Log in to continue</h2>
            <form className="flex flex-col items-start" onSubmit={(event) => handleLogin(event)}>
                <div className="flex flex-row gap-2 mb-5 items-start relative">
                    <input
                        className="pl-10 h-14 w-[600px] ring-2 ring-black shadow-none rounded-none"
                        type="text"
                        placeholder="Username"
                        onChange={(event) => setUsername(event.target.value)}>
                    </input>
                    <FaIcons.FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2"/>
                </div>
                <div className="flex flex-row gap-2 mb-5 items-start relative">
                    <input
                        className="pl-10 h-14 w-[600px] ring-2 ring-black shadow-none rounded-none"
                        type="password"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}>
                    </input>
                    <FaIcons.FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2"/>
                </div>
                <div className="flex flex-row items-center justify-center gap-24">
                    <input type="submit" value="Login" className="text-white bg-deepTurquoise text-center items-center justify-center mt-10 text-2xl font-light w-56 h-14 rounded-full shadow-none"/>
                    <h2 className="text-center flex items-center mt-14 text-base">FORGOT PASSWORD?</h2>
                </div>
            </form>
        </div>
    )
}

export default Login;