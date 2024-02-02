const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Collaborative-Code-Snippet-Repository API');
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
