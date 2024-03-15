import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './LandingPage.module.css'; 

function LandingPage () 
{
    const navigate = useNavigate(); 

    const handleLogin = () => 
    {
        navigate("/login"); 
    }

    const handleMain = () => 
    {
        navigate("/main");
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
        <div>
            <h1 className={classes.title}>Landing Page</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick = {handleMain}>Main Page</button>
            <button onClick = {handleSongManagement}>Manage Songs</button>
            <button onClick = {handleSongPreview}>Preview Songs</button>
            <button onClick = {handleSongUpload}>Upload Songs</button>
            <button onClick = {handleUserManage}>Manage Users</button>
        </div>
    )
}

export default LandingPage; 