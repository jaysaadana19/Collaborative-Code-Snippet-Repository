import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import snippetRouter from './routes/snippet.route.js'

const app = express();
app.use(express.json())
app.use(cors());
dotenv.config()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log(`Server is successfully connected to database`);
}).catch((err) => {
  console.log(err)
});


app.get('/', (req, res) => {
  res.send('Welcome to the Collaborative-Code-Snippet-Repository API');
});

app.use('/api', snippetRouter);