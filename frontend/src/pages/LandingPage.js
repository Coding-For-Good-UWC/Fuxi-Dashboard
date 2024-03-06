import React from 'react'; 
import { useNavigate } from 'react-router-dom';

function LandingPage () 
{
    const navigate = useNavigate(); 

    const handleLogin = () => 
    {
        navigate("/login"); 
    }

    return (
        <div>
            <h1>Landing Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LandingPage; 