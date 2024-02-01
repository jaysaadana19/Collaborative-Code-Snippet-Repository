import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function CodeSnippetList() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    fetch('/api/code-snippets')
      .then(response => response.json())
      .then(data => setSnippets(data.snippets))
      .catch(error => console.error('Error fetching code snippets:', error));
  }, []);

  return (
    <div>
      <h2>Code Snippets</h2>
      <ul>
        {snippets.map(snippet => (
          <li key={snippet.id}>
            <strong>{snippet.language}:</strong> {snippet.code}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to Collaborative-Code-Snippet-Repository
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CodeSnippetList /> {/* Include the CodeSnippetList component here */}
      </header>
    </div>
  );
}

export default App;

