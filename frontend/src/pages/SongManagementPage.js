import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './SongManagementPage.module.css';
import * as FaIcons from "react-icons/fa"; 


function SongManagementPage()
{
    const navigate = useNavigate();

    const [songs, setSongs] = useState("")

    const [url, setUrl] = useState('')

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

    const checkSong = async (event) => {
        event.preventDefault();

        const dataToSend = {
            url: url
        }

        const response = await fetch("http://localhost:3001/song/new",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            })

        const data = await response.json();

        console.log(data);

        }

    useEffect(() => 
    {
        getSongData(); 
    }, []); 
   




    return(
        <div className = {classes.container}>

            <div className= {classes.topContainer}>
                <form onSubmit = {(event) => {checkSong(event)}} className = {classes.newSong}>
                    <h1 className = {classes.subtitle}>Western Music</h1>
                <div className ={classes.urlAndLink}>
                    <input 
                    className = {classes.urlInput}
                    placeholder='Paste Youtube URL Here'
                    type = 'text'
                    onChange={(event) => {setUrl(event.target.value)}}

                    ></input>
                    <FaIcons.FaLink className = {classes.link}></FaIcons.FaLink>
                </div>  
                    <button type = 'submit' className={classes.uploadButton}>Upload To Database</button>

                </form>
            </div>

            <div className = {classes.bottomContainer}>

           
                <div className = {classes.songs}>
                    { Object.keys(songs).length > 0 && songs.map((song, index) => 
                        <div className = {classes.songInfo}>
                            <img className = {classes.thumbnail} src = {song.url}></img>
                            <h2 className = {classes.songName}>{song.songName}</h2>
                            <h2 className = {classes.songArtist}>{song.songArtist}</h2>
                            <FaIcons.FaEdit></FaIcons.FaEdit>
                            <FaIcons.FaTrash></FaIcons.FaTrash>
                        </div>
                    )}
                
                </div>
            
            </div>
           

        </div>
    )
}



export default SongManagementPage;