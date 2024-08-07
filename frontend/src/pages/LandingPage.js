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
            <div className = {classes.topContainer}>
                <div className = {classes.leftContainer}>
                    <h1 className="title">Tapping into the power <br></br>of music for Persons<br></br> with Dementia</h1>
                    <h2 className = {classes.subtitle}>FUXI is an application made to assist Persons with <br></br>Dementia and those who care for them by tapping into the <br></br>power of music in improving wellbeing and engagement.</h2> 
                    <button onClick = {handleLogin} className = {classes.getStartedButton}>Get Started</button>
                    
                </div>
                <div className = {classes.rightContainer}>
                    <img className = {classes.man} src = {Man}></img>
                </div>
            </div>
            <div className = {classes.bottomContainer}>
                <FaIcons.FaAngleDoubleDown></FaIcons.FaAngleDoubleDown>
            <p>
            FUXI is an application made to assist Persons with Dementia and those who care for them by tapping into the power of music in improving wellbeing and engagement.

Research has demonstrated the effects of using familiar music as a way to increase brain activity and thereby improving alertness, ability to sustain conversation and physical and mental engagement in Persons with Dementia. The effect can be transformative and it can restore a sense of dignity for Persons with Dementia, while also providing relief for caregivers.

Finding and tracking this music can be additional work for caregivers. This is where FUXI can help. By using a wealth of knowledge developed over a 10 year collaboration between caregivers, healthcare providers, volunteers and Persons with Dementia, we have developed this free app to help support people anwhere at any time.

The app will remember your preferences and the more you use the app the more effective it will become. Recommended music is catered especially towards Persons with Dementia, as it is based on a wealth of research from caregivers and healthcare providers.
            </p>
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