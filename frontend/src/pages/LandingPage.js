import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './LandingPage.module.css';
import * as FaIcons from "react-icons/fa";  
import Man from '../assets/Man.png'

function LandingPage () 
{
    const navigate = useNavigate(); 

    const handleLogin = () => 
    {
        navigate("/login"); 
    }

    const handleDashboard = () => 
    {
        navigate("/dashboard");
    }

    const handleSongManagement = () => 
    {
        navigate("/song/management");
    }

    

    const handleSongUpload = () =>
    {
        navigate("/song/upload");
    }

    const handleUserManage = () =>
    {
        navigate("/user/manage");
    }

    const handleSongPreview = () =>
    {
        navigate("/song/preview");
    }

    return (
        <div className = {classes.container}>
            <div className = {classes.leftContainer}>
                <h1 className={classes.title}>Tapping into the power <br></br>of music for Persons<br></br> with Dementia</h1>
                <h2 className = {classes.subtitle}>FUXI is an application made to assist Persons with <br></br>Dementia and those who care for them by tapping into the <br></br>power of music in improving wellbeing and engagement.</h2> 
                <button className = {classes.getStartedButton}>Get Started</button>
            </div>
            <div className = {classes.rightContainer}>
                <img className = {classes.man} src = {Man}></img>
            </div>
        </div>
    )
}

export default LandingPage; 
{/* <button onClick={handleLogin}>Login</button>
<button onClick = {handleDashboard}>Dashboard Page</button>
<button onClick = {handleSongManagement}>Manage Songs</button>
<button onClick = {handleSongPreview}>Preview Songs</button>
<button onClick = {handleSongUpload}>Upload Songs</button>
<button onClick = {handleUserManage}>Manage Users</button> */}