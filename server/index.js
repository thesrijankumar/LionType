import 'dotenv/config'
import express from 'express';

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Greetings from Backend!");
})

app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`)
})