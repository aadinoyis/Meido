import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config()
const configuration = new Configuration({
    organization: "org-n0yPmCXmrIc709IdOXI51JKO",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//Now creating an express app to handle requests

const app = express();
app.use(express.json());
app.use(cors());

const port = 8000;

app.get('/', async (req, res) => {
    res.status(200).send({
        msg: 'welcome to meido'
    })
})

app.post('/bot', async (req, res) => {
    const inquiry = req.body.issue;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Diagonise this as a health specialist: ${inquiry}`,
        max_tokens: 1000,
        temperature: 0.5,
    });
    
    res.json({
        diagnosis: response.data.choices[0].text
    })
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})
