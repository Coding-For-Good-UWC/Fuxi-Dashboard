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

            <h1>Preview Songs</h1>
            <h1>Test</h1>
            <div className = {classes.togglePausePlay}>

                <FaIcons.FaAngleDoubleLeft className = {classes.icon}></FaIcons.FaAngleDoubleLeft>
                <div className = {classes.toggle} onClick = {() => setIsPlay(!isPlay)}>
                    { !isPlay && <FaIcons.FaPlay className = {classes.icon}></FaIcons.FaPlay> }
                    { isPlay &&   <FaIcons.FaPause className = {classes.icon}></FaIcons.FaPause> }
                </div>
        
                <FaIcons.FaAngleDoubleRight className = {classes.icon}></FaIcons.FaAngleDoubleRight>
                
            </div>

        </div>
    )
}



export default SongPreviewPage;