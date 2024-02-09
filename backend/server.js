const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/auth')
const mongoose = require('mongoose')
require('dotenv').config();


const app = express();
app.use(express.json())
app.use(cors());

app.use('/user', userRouter);
app.get('/', (req, res) => {
  res.send('Welcome to the Collaborative-Code-Snippet-Repository API');
});

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB, { dbName: "Collaborative-Code-Snippet" })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
