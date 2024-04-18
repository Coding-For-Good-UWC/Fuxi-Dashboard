require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const PORT = process.env.PORT; 

app.get('/', async (req, res) => {
    try {
        const data = {
            key: "value"
        }

        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

app.get('/user', async (req, res) => {
    try {
        const data = {
            username: "admin"
        }

        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

app.post('/user/existing', async(req, res) =>
{
    try{
        // const { username, password } = req.body;

        const username = req.body.username; 
        const password = req.body.password; 

        const message = `TODO: Check for user with : ${username} and password: ${password}`; 
        
        console.log (message); 

        const dataToSend = { 
            message: message 
        }

        res.status(200).json(dataToSend); 
    }
    catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

app.post('/user/new', async(req, res) => 
{
    try{
        // const { username, password } = req.body;

        const username = req.body.username; 
        const email = req.body.email
        const password = req.body.password; 

        const message = `TODO: Create new user with : ${username} and password: ${password}`; 
        
        console.log (message); 

        const dataToSend = { 
            message: message 
        }

        res.status(200).json(dataToSend); 
    }
    catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

app.get("/dashboard/categories", async (req, res) => {
    try {
        const Dummy_Data = [
            {
                _id: "0",
                categoryName: "Country",
                colour: 'purple',
                numberSongs: 12
            },
            {
                _id: "1",
                categoryName: "Malay",
                colour: 'white',
                numberSongs: 18
            },
            {
                _id: "2",
                categoryName: "Balinese",
                colour: 'green',
                numberSongs: 3
            },
            {
                _id: "3",
                categoryName: "Singaporean",
                colour: 'orange',
                numberSongs: 14
            },
            {
                _id: "4",
                categoryName: "Chinese",
                colour: 'pink',
                numberSongs: 8
            },
            {
                _id: "5",
                categoryName: "Japanese",
                colour: 'blue',
                numberSongs: 11
            },
            {
                _id: "6",
                categoryName: "Classical",
                colour: 'red',
                numberSongs: 9
            },
        ];

        const dataToSend = {
            categories: Dummy_Data,
            status: "SUCCESS",
            message: "Successfully retrieved categories for user"
        }
        

        res.status(200).json(dataToSend);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" })
    }

})

app.get("/song/category", async (req, res) => {

    try {
        const Dummy_Data = [
            {
                songName: "Favella",
                songArtist: "Tyler Johnson",
                youtubeID: "1",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              },
              {
                songName: "Midnight Sky",
                songArtist: "Elisa Ray",
                youtubeID: "2",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              },
              {
                songName: "Golden Hour",
                songArtist: "Martin Rhodes",
                youtubeID: "3",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              },
              {
                songName: "Silent Streets",
                songArtist: "Lucy Hart",
                youtubeID: "4",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              },
              {
                songName: "Echoes",
                songArtist: "Connor Lee",
                youtubeID: "5",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              },
              {
                songName: "Lost in the Wind",
                songArtist: "Sophia Bell",
                youtubeID: "6",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              },
              {
                songName: "Neon Dreams",
                songArtist: "Jason Meyer",
                youtubeID: "7",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              },
              {
                songName: "River Song",
                songArtist: "Amelia Grant",
                youtubeID: "8",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              },
              {
                songName: "Whispering Woods",
                songArtist: "Nate Young",
                youtubeID: "9",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              },
              {
                songName: "Starlight Avenue",
                songArtist: "Ella Knox",
                youtubeID: "10",
                url: "https://wallpapers.com/images/hd/youtube-thumbnail-square-bokeh-0w17n2uctdf0rybg.jpg"
              }
             
        ];

        const dataToSend = {
            songs: Dummy_Data,
            status: "SUCCESS",
            message: "Successfully retrieved categories for user"
        }
        

        res.status(200).json(dataToSend);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})


app.listen(PORT, () => // fire up express server
{
    console.log ("LISTENING ON PORT " + PORT);
}); 