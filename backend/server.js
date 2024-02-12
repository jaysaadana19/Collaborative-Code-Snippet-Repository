import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import snippetRouter from './routes/snippet.route.js'
const app = express();
app.use(express.json())
app.use(cors());
dotenv.config();
app.get('/', (req, res) => {
  res.send('Welcome to the Collaborative-Code-Snippet-Repository API');
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Successfully connected to MONGODB");
}).catch((err) => {
  console.log(err)
  console.log("error handlingd")
});
app.use('/api', snippetRouter);
