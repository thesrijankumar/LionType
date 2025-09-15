import 'dotenv/config'
import express from 'express';
import dbConnect from './config/dbConnect.js';

const app = express();

dbConnect();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Greetings from Backend!");
})

app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`)
})