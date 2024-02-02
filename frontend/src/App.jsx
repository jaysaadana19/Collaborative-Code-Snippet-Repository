import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.text())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="text-black p-10 font-mono text-center">
      <header>
        <h1 className="text-2xl">Data from Express:</h1>
        {data ? <p>{data}</p> : <p>Loading ...</p>}
      </header>
    </div>
  );
}

export default App;
