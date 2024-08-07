import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

function SongManagementPage() {
    const navigate = useNavigate();

    const [songs, setSongs] = useState([]);
    const [url, setUrl] = useState('');
    const [currSongIndex, setCurrSongIndex] = useState("-1");

    const songPreviewIndex = (index) => {
        setCurrSongIndex(index);
        navigate("/song/preview", {
            state: {
                selectedSong: songs[index]
            }
        });
    }

    useEffect(() => {
        console.log(currSongIndex);
    }, [currSongIndex]);

    const getSongData = async () => {
        const response = await fetch("http://localhost:3001/song/category");
        const data = await response.json();

        if (data.status === "ERROR") {
            alert(data.message);
            return;
        }

        setSongs(data.songs);
    }

    const checkSong = async (event) => {
        event.preventDefault();

        const dataToSend = {
            url: url
        }

        const response = await fetch("http://localhost:3001/song/new", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })

        const data = await response.json();
    }

    useEffect(() => {
        getSongData();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col h-1/2">
                <form onSubmit={(event) => { checkSong(event) }} className="flex flex-col gap-12">
                    <h1 className="text-4xl">Western Music</h1>
                    <div className="relative flex flex-row">
                        <input
                            className="w-[1000px] pl-10 py-2 border"
                            placeholder="Paste Youtube URL Here"
                            type="text"
                            onChange={(event) => { setUrl(event.target.value) }}
                        ></input>
                        <FaIcons.FaLink className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <button type="submit" className="bg-genreHindi text-white w-[600px] h-12 rounded-full">Upload To Database</button>
                </form>
            </div>

            <div className="flex flex-col items-center mt-8">
                <div className="w-full h-80 overflow-y-scroll flex flex-col gap-5">
                    {Object.keys(songs).length > 0 && songs.map((song, index) =>
                        index % 2 === 0 ?
                            <div onClick={() => songPreviewIndex(index)} className="flex flex-row items-center gap-4 h-12 w-full bg-gray-300 p-2 rounded-lg cursor-pointer">
                                <div className="flex flex-row items-center gap-4 w-1/2">
                                    <img className="w-14 h-14 object-cover" src={song.url} alt={song.songName} />
                                    <div className="flex flex-col">
                                        <h2 className="text-xl font-medium text-teal-500">{song.songName}</h2>
                                        <h2 className="text-sm text-teal-500">{song.songArtist}</h2>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-16 w-1/2 justify-end">
                                    <h2 className="text-teal-500">{song.length}</h2>
                                    <div className="flex flex-row gap-2">
                                        <FaIcons.FaEdit className="text-2xl cursor-pointer" />
                                        <FaIcons.FaTrash className="text-2xl cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            :
                            <div onClick={() => songPreviewIndex(index)} className="flex flex-row items-center gap-4 h-12 w-full bg-gray-400 p-2 rounded-lg cursor-pointer">
                                <div className="flex flex-row items-center gap-4 w-1/2">
                                    <img className="w-14 h-14 object-cover" src={song.url} alt={song.songName} />
                                    <div className="flex flex-col">
                                        <h2 className="text-xl font-medium text-teal-500">{song.songName}</h2>
                                        <h2 className="text-sm text-teal-500">{song.songArtist}</h2>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-16 w-1/2 justify-end">
                                    <h2 className="text-teal-500">{song.length}</h2>
                                    <div className="flex flex-row gap-2">
                                        <FaIcons.FaEdit className="text-2xl cursor-pointer" />
                                        <FaIcons.FaTrash className="text-2xl cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SongManagementPage;
