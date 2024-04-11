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

app.post('/user/new', async(req, res) =>
{
    try{
        // const { username, password } = req.body;

        const username = req.body.username; 
        const password = req.body.password; 

        const message = `TODO: make new user with username: ${username} and password: ${password}`; 
        
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
                categoryName: "Country Music",
                colour: 'purple'
            },
            {
                _id: "1",
                categoryName: "Malay Music",
                colour: 'white'
            },
            {
                _id: "2",
                categoryName: "Balinese Traditional Music",
                colour: 'green'
            },
            {
                _id: "3",
                categoryName: "Singaporean Music",
                colour: 'orange'
            },
            {
                _id: "4",
                categoryName: "Chinese Music",
                colour: 'pink'
            },
            {
                _id: "5",
                categoryName: "Japanese Music",
                colour: 'blue'
            },
            {
                _id: "6",
                categoryName: "Classical Music",
                colour: 'red'
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


app.listen(PORT, () => // fire up express server
{
    console.log ("LISTENING ON PORT " + PORT);
}); 