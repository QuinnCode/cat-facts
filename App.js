import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((data) => {
        setFacts(data.data);
      })
      .catch((error) => {
        console.error("Error fetching the cat facts:", error);
      });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Cat Facts</h1>
      </header>
      <div className="grid-container">
        {facts.map((fact, index) => (
          <div className="card" key={index}>
            <img
              src={`https://cataas.com/cat?type=square&${index}`}
              alt="Cat"
            />
            <p>{fact.fact}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>
          Check the code on{" "}
          <a
            href="https://github.com/QuinnCode/cat-facts"
            target="https://github.com/QuinnCode/cat-facts"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
