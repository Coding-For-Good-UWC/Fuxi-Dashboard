import React, { useState, useEffect } from 'react'; 
import { Navigate, useNavigate } from 'react-router-dom';
import classes from './SongManagementPage.module.css';
import * as FaIcons from "react-icons/fa"; 



function SongManagementPage()
{
    const navigate = useNavigate();

    const [songs, setSongs] = useState([])

    const [url, setUrl] = useState('')

    const [currSongIndex, setCurrSongIndex] = useState("-1")
    
    const songPreviewIndex = (index) => 
    {
        setCurrSongIndex(index)
        // console.log(currSongIndex)

        navigate("/song/preview", 
            { state: {
                selectedSong: songs[index]
            }}
        );
    }

    useEffect(() => 
    {
        console.log (currSongIndex)
    }, [currSongIndex])
    



    const getSongData = async () => {
        // console.log ("HI")
        const response = await fetch("http://localhost:3001/song/category");
        const data = await response.json();
        // console.log(data)

        if (data.status === "ERROR") {
            alert(data.message);
            return;
        }

        setSongs(data.songs)
    }

    // console.log(songs)

    
    // const toSongPreviewPage = () => {
    //     navigate("/song/preview", 
    //         { state: {
    //             selectedSong: songs[currSongIndex]
    //         }}
    //     );
    // }

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

        // console.log(data);
        // console.log(songs)

        }

    useEffect(() => 
    {
        getSongData(); 
        // songPreviewIndex();
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
                    {/* <button onClick = {toSongPreviewPage}> Route to Song Preview Page</button> */}

                </form>
            </div>

            <div className = {classes.bottomContainer}>

           
                <div className = {classes.songs}>
                    
                    { Object.keys(songs).length > 0 && songs.map((song, index) => 
                    index % 2 === 0 ? 
                    <div onClick = {() => songPreviewIndex(index)} className = {classes.songInfo}>
                        <div className = {classes.leftSongInfo}>
                            <img className = {classes.thumbnail} src = {song.url}></img>
                            <div className = {classes.nameAndArtist}>
                                <h2 className = {classes.songName}>{song.songName}</h2>
                                <h2 className = {classes.songArtist}>{song.songArtist}</h2>
                        </div>
                            </div>
                            <div className = {classes.rightSongInfo}>
                                <h2 className = {classes.songLength}>{song.length}</h2>
                                <div className = {classes.icons}>
                                    <FaIcons.FaEdit className = {classes.icon}></FaIcons.FaEdit>
                                    <FaIcons.FaTrash className = {classes.icon}></FaIcons.FaTrash>
                                </div>
                            </div>
                        </div>
                    : 
                    <div onClick = {() => songPreviewIndex(index)}  className = {classes.songInfoDark}>
                        <div className = {classes.leftSongInfo}>
                            <img className = {classes.thumbnail} src = {song.url}></img>
                            <div className = {classes.nameAndArtist}>
                                <h2 className = {classes.songName}>{song.songName}</h2>
                                <h2 className = {classes.songArtist}>{song.songArtist}</h2>
                            </div>
                        </div>
                            <div className = {classes.rightSongInfo}>
                                <h2 className = {classes.songLength}>{song.length}</h2>
                                <div className = {classes.icons}>
                                    <FaIcons.FaEdit className = {classes.icon}></FaIcons.FaEdit>
                                    <FaIcons.FaTrash className = {classes.icon}></FaIcons.FaTrash>
                                </div>
                            </div>
                        </div>
                        
                    )}
                
                </div>
            
            </div>
           

        </div>
    )
}


export default SongManagementPage;
