import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // function handleStepDecrement() {
  //   setStep((s) => s - 1);
  // }

  // function handleStepIncrement() {
  //   setStep((s) => s + 1);
  // }

  function handleCountDecrement() {
    setCount((c) => c - step);
  }

  function handleCountIncrement() {
    setCount((c) => c + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div>
        <div>
          <input onChange={(e) => setStep(Number(e.target.value))} type="range" min="0" max="10"></input> {step}
        </div>
        <span></span>
      </div>

      <div>
        <button onClick={handleCountDecrement}>-</button>
        <span>
          {" "}
          <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))}></input>
        </span>
        <button onClick={handleCountIncrement}>+</button>
      </div>
      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${-count} days ago was `}</span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}

export default App;
