import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';
import menu from '../assets/hamburger.png'
import pfp from '../assets/account.png'
import * as FaIcons from "react-icons/fa"; 

function Navbar ()
{

    const navigate = useNavigate();
    const handleLogin = () => 
    {
        navigate("/login")
    }
    const toDashboardPage = () => 
    {
        navigate("/dashboard")
    }
    

    return (
        <div className = {classes.container}>
            <div className = {classes.leftContainer}>
                <FaIcons.FaBars className = {classes.menu}/>
                <h1 onClick = {toDashboardPage} className = {classes.title}>Fuxi Dashboard</h1>
                {/* <h2 className = {classes.subtitle}>Tapping into the power of music for Persons with Dementia</h2> */}
            </div>
            
       
            <div className = {classes.rightContainer}>
                <h3 onClick = {handleLogin} className = {classes.usernameText}>Login/Signup</h3>
                <FaIcons.FaUser className = {classes.pfp}/>
            </div>

        </div>
    )

}



export default Navbar;
