import { useState } from "react";

export default function App() {
  const [myPercentage, setMyPercentage] = useState(10);
  const [friendPercentage, setFriendPercentage] = useState(0);
  const [bill, setBill] = useState("");
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={myPercentage} setPercentage={setMyPercentage}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={friendPercentage} setPercentage={setFriendPercentage}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <BillOutput bill={bill} myPercentage={myPercentage} friendPercentage={friendPercentage} />
          <ResetButton setBill={setBill} setMyPercentage={setMyPercentage} setFriendPercentage={setFriendPercentage} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))}></input>
    </div>
  );
}
function SelectPercentage({ percentage, setPercentage, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={`${percentage}`} onChange={(e) => setPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function BillOutput({ bill, myPercentage, friendPercentage }) {
  const res = Math.round(bill + (bill * ((myPercentage + friendPercentage) / 2)) / 100);
  return (
    <div>
      <h1>{`You pay $${res} ($${bill} + $${Math.round((bill * ((myPercentage + friendPercentage) / 2)) / 100)} tip)`}</h1>
    </div>
  );
}

function ResetButton({ setBill, setMyPercentage, setFriendPercentage }) {
  function handleReset() {
    setBill("");
    setMyPercentage(10);
    setFriendPercentage(20);
  }
  return <button onClick={handleReset}>Reset</button>;
}
