import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import WomanFlipped from '../assets/WomanFlipped.png';

function LoginPage() {
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false);

    const returnToLanding = () => {
        navigate("/");
    }

    return (
        <div className="flex w-screen h-[calc(100vh-100px)] flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-start w-1/2 h-full">
                <img onClick={returnToLanding} className="h-[700px]" src={WomanFlipped} alt="Woman Flipped" />
            </div>

            <div className="flex flex-col items-start justify-start w-1/2 h-full gap-6">
                <div className="flex flex-row items-center justify-end w-full gap-0 pr-[100px] mt-[60px]">
                    <h2 className="font-light">{`${isLogin ? "Already Have an Account?" : "New User?"}`}</h2>
                    <h2 className="font-semibold text-deepTurquoise cursor-pointer ml-2" onClick={() => setIsLogin(!isLogin)}>{`${isLogin ? "Log In" : "Sign Up"}`}</h2>
                </div>
                {!isLogin && <Login />}
                {isLogin && <Signup />}
            </div>
        </div>
    );
}

export default LoginPage;