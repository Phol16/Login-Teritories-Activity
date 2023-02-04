import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.get('/Territories/All', async (req, res) => {
  const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All');
  const data = await response.json();
  res.status(200).json(data);
});

app.post('/Account/SignIn', async (req, res) => {
  const IncomingData = req.body;

  const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
    method: 'post',
    body: JSON.stringify(IncomingData),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`app is listening to : ${port}`);
});
