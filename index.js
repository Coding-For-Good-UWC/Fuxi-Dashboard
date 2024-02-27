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




app.listen(PORT, () => // fire up express server
{
    console.log ("LISTENING ON PORT " + PORT);
}); 