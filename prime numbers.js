import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [primes, setPrimes] = useState([]);

  const generatePrimes = () => {
    const n = Number(number);
    const result = [];

    if (n < 2) {
      setPrimes([]);
      return;
    }

    for (let i = 2; i <= n; i++) {
      let isPrime = true;

      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        result.push(i);
      }
    }

    setPrimes(result);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🔢 Prime Number Generator</h1>
        <p>Enter a number to generate prime numbers</p>

        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button onClick={generatePrimes}>
          Generate Primes
        </button>

        <div className="result">
          <h2>✨ Prime Numbers</h2>

          {primes.length > 0 ? (
            <div className="prime-list">
              {primes.map((prime) => (
                <span key={prime}>{prime}</span>
              ))}
            </div>
          ) : (
            <p className="message">
              Enter a number and click the button
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;