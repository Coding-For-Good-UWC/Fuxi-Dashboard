import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';
import hamburgerIcon from '../assets/hamburger.png'
import profilePicture from '../assets/account.png'

function Navbar ()
{
    

    return (
        <div className = {classes.container}>
            <h1>Fuxi Dashboard</h1>
            <h2>Tapping into the power of music for Persons with Dementia</h2>
            <img src = {hamburgerIcon}/>
            <h3>Username</h3>
            <img src = {profilePicture}/>

        </div>
    )

}



export default Navbar;
