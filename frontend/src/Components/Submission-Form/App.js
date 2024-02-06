// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";

const SubmissionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [tags, setTags] = useState("");
  const [language, setLanguage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with form data
    const formData = {
      title,
      description,
      codeSnippet,
      tags: tags.split("#"),
      language,
    };

    console.log("Form data:", formData);

    // Example: Send formData to a specific URL
    // const apiUrl = 'https://example.com/api/submit';
    // fetch(apiUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle success or display a message to the user
    //   console.log('Submission successful:', data);
    // })
    // .catch(error => {
    //   // Handle error or display an error message to the user
    //   console.error('Error submitting data:', error);
    // });

    // Clear the form after submission

    setTitle('');
    setDescription('');
    setCodeSnippet('');
    setTags('');
    setLanguage('');
  };

  // Function to handle manual clearing form fields

  const handleClear = () => {
    setTitle('');
    setDescription('');
    setCodeSnippet('');
    setTags('');
    setLanguage('');
  };

  return (
    <div className="form-container">
      <h1>Submission Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="codeSnippet">Code Snippet:</label>
          <textarea
            id="codeSnippet"
            className="form-control"
            value={codeSnippet}
            onChange={(e) => setCodeSnippet(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            className="form-control"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            className="form-control"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Select language</option>
            <option className="opt" value="html">HTML</option>
            <option className="opt" value="css">CSS</option>
            <option className="opt" value="javascript">JavaScript</option>
            <option className="opt" value="react">React</option>
            <option className="opt" value="Python">Python</option>
          </select>
        </div>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" className="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;
