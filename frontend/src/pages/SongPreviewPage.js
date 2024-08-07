import React, { useEffect, useState } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"; 


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
        console.log(selectedSong.url)
    }, []); 



    return(
        <div className="flex flex-col items-center w-full h-screen">
            <div className="flex flex-col items-center w-full h-full">
                <h1 className="text-4xl font-bold mt-8">Preview Songs</h1>
                <div className="flex flex-col items-center mt-8">
                    <img className="w-48 h-48 rounded-lg" src={selectedSong.url} alt={`${selectedSong.songName} thumbnail`} />
                    <h2 className="text-green-600 text-3xl mt-4">{`${selectedSong.songName} - ${selectedSong.songArtist}`}</h2>
                </div>
                <div className="flex items-center justify-center mt-8 gap-8">
                    <FaIcons.FaStepBackward className="text-6xl" />
                    <div onClick={() => setIsPlay(!isPlay)}>
                        { !isPlay ? 
                            <FaIcons.FaPlayCircle className="text-7xl" /> : 
                            <FaIcons.FaPauseCircle className="text-7xl" /> }
                    </div>
                    <FaIcons.FaStepForward className="text-6xl" />
                </div>
            </div>
        </div>
    )
}

export default SongPreviewPage;
