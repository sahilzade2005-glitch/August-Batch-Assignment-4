// HCF And GCD of NUMBERS
import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculateGCD = () => {
    let a = Math.abs(Number(num1));
    let b = Math.abs(Number(num2));

    if (!a || !b) {
      setResult("Please enter two valid numbers");
      return;
    }

    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    setResult(a);
  };

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>HCF & GCD Calculator</h1>
        <p className="subtitle">
          Find the Highest Common Factor of two numbers
        </p>

        <div className="input-group">
          <label>First Number</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
        </div>

        <div className="input-group">
          <label>Second Number</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>

        <div className="buttons">
          <button onClick={calculateGCD}>Calculate HCF</button>
          <button className="clear" onClick={clearAll}>Clear</button>
        </div>

        {result !== null && (
          <div className="result">
            <span>HCF / GCD</span>
            <strong>{result}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
