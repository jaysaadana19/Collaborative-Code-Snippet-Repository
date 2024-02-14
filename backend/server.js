const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Collaborative-Code-Snippet-Repository API');
});

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB, { dbName: "Collaborative-Code-Snippet" })

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
