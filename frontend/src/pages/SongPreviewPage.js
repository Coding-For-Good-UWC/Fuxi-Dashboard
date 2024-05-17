import React, { useEffect, useState } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"; 
import classes from './SongPreviewPage.module.css'


function SongPreviewPage()
{
    const navigate = useNavigate();

    const location = useLocation(); 
    const { selectedSong } = location.state; 

    const [isPlay, setIsPlay] = useState(true)


    useEffect(() => 
    {
        console.log ("HERE:")
        console.log (selectedSong); 
    }, []); 



    return(
        <div className = {classes.container}>
            <div className = {classes.topContainer}>
                <h1>Preview Songs</h1>
                <h2></h2>
            </div>


            <div className = {classes.bottomContainer}>
                <FaIcons.FaStepBackward className = {classes.icon}></FaIcons.FaStepBackward>
                <div className = {classes.toggle} onClick = {() => setIsPlay(!isPlay)}>
                    { !isPlay && <FaIcons.FaPlayCircle className = {classes.iconBig}></FaIcons.FaPlayCircle> }
                    { isPlay &&   <FaIcons.FaPauseCircle className = {classes.iconBig}></FaIcons.FaPauseCircle> }
                </div>
        
                <FaIcons.FaStepForward className = {classes.icon}></FaIcons.FaStepForward>
                
            </div>

        </div>
    )
}



export default SongPreviewPage;