import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"; 

function Signup() {
    const navigate = useNavigate();

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

        // console.log(data);

    }

    return(
        <div className="flex flex-col items-start justify-center ">
            <h1 className="text-left text-5xl mb-2">Create an Account</h1>
            <h2 className="text-left text-xl mt-1 mb-12">Sign up as an institution</h2>
            <form className="flex flex-col items-start justify-center" onSubmit={(event) => handleSignup(event)}>
                <div className="flex flex-row gap-2 mb-5 items-center relative w-full">
                    <input
                        className="shadow-none pl-10 h-16 w-[600px] ring-2 ring-black rounded-none"
                        type="text"
                        placeholder='Username'
                        onChange={(event) => setUsername(event.target.value)}>
                    </input>
                    <FaIcons.FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2" />
                </div>

                <div className="flex flex-row gap-2 mb-5 items-center relative w-full">
                    <input
                        className="shadow-none pl-10 h-16 w-[600px] ring-2 ring-black rounded-none"
                        type="text"
                        placeholder='Email'
                        onChange={(event) => setEmail(event.target.value)}>
                    </input>
                    <FaIcons.FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2" />
                </div>

                <div className="flex flex-row gap-2 mb-5 items-center relative w-full">
                    <input
                        className="shadow-none pl-10 h-16 w-[600px] ring-2 ring-black rounded-none"
                        type="password"
                        placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)}>
                    </input>
                    <FaIcons.FaLock className="absolute top-1/2 left-4 transform -translate-y-1/2" />
                </div>

                <div className="flex flex-row gap-24 items-center justify-center mt-10">
                    <input type="submit" value="Sign Up" className="flex items-center justify-center bg-deepTurquoise text-white text-xl font-light w-56 h-16 rounded-full shadow-none"></input>
                </div>
            </form>
        </div>
    )
}

export default Signup;