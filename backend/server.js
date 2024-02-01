const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());

// Dummy code snippets data (replace with your actual data handling logic)
const codeSnippets = [
  { id: 1, language: 'JavaScript', code: 'console.log("Hello, World!");' },
  { id: 2, language: 'Python', code: 'print("Hello, World!")' },
  // Add more code snippets as needed
];

// API endpoint to fetch code snippets
app.get('/', (req, res) => {
  res.send('Welcome to the Collaborative-Code-Snippet-Repository API');
});

app.get('/api/code-snippets', (req, res) => {
  res.json({ snippets: codeSnippets });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
