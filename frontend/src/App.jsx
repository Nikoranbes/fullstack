import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log("Error fetching jokes:", error);
      });
  }); // Dependency array to run effect only once on mount

  return (
    <>
      <h1>Chai and Full Stack</h1>
      <p>JOKES: {jokes.length}</p>
      <h2>
        not working hahaha
      </h2>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
