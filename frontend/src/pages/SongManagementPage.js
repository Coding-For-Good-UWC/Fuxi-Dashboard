import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './SongManagementPage.module.css';


function SongManagementPage()
{
    const navigate = useNavigate();

    const [songs, setSongs] = useState("")

    const getSongData = async () => {
        const response = await fetch("http://localhost:3001/song/category");
        const data = await response.json();
        console.log(data)

        if (data.status === "ERROR") {
            alert(data.message);
            return;
        }

        setSongs(data.songs)
    }

    console.log(songs)

    useEffect(() => 
    {
        getSongData(); 
    }, []); 
   




    return(
        <div className = {classes.container}>

 

            <div className = {classes.bottomContainer}>

           
                <h1 className = {classes.subtitle}>Western Music</h1>
                <div className = {classes.songs}>
                    { Object.keys(songs).length > 0 && songs.map((song, index) => 
                        <div className = {classes.songInfo}>
                            <img className = {classes.thumbnail} src = {song.url}></img>
                            <h2 className = {classes.songName}>{song.songName}</h2>
                            <h2 className = {classes.songArtist}>{song.songArtist}</h2>
                        </div>
                    )}
                
                </div>
            
            </div>
           

        </div>
    )
}



export default SongManagementPage;