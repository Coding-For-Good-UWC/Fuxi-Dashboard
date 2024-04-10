import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';
import menu from '../assets/hamburger.png'
import pfp from '../assets/account.png'

function Navbar ()
{
    

    return (
        <div className = {classes.container}>
            <h1 className = {classes.title}>Fuxi Dashboard</h1>
            <h2 className = {classes.subtitle}>Tapping into the power of music for Persons with Dementia</h2>
            <img className = {menu} src = {menu}/>
            <div className = {classes.usernamePfp}>
                <h3 className = {classes.usernameText}>Username</h3>
                <img className = {classes.pfp} src = {pfp}/>
            </div>

        </div>
    )

}



export default Navbar;
