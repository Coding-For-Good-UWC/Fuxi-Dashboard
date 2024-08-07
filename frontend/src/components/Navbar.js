import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';
import menu from '../assets/hamburger.png'
import pfp from '../assets/account.png'
import * as FaIcons from "react-icons/fa"; 

function Navbar() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    }
    const toDashboardPage = () => {
        navigate("/dashboard");
    }

    return (
        <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-12 pl-24">
                <FaIcons.FaBars className="text-2xl text-gray-500" />
                <h1 onClick={toDashboardPage} className="text-3xl cursor-pointer font-semibold">Project FUXI</h1>
                {/* <h2 className="text-lg mt-1">Tapping into the power of music for Persons with Dementia</h2> */}
            </div>
            <div className="flex items-center gap-12 pr-24">
                <h3 onClick={handleLogin} className="cursor-pointer">Login/Signup</h3>
                <FaIcons.FaUser className="text-2xl text-gray  " />
            </div>
        </div>
    )
}

export default Navbar;