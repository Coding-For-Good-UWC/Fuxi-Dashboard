import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"; 
import classes from './SongPreviewPage.module.css'


function SongPreviewPage()
{
    const navigate = useNavigate();

    const [isPlay, setIsPlay] = React.useState(true)




    return(
        <div className = {classes.container}>
            <div className = {classes.topContainer}>
                <h1>Preview Songs</h1>
                <h2 className = {classes.songDetails}>Favella - Tyler Johnson</h2>
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