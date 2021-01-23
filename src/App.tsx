import React, { useState } from 'react';


function App() {

  const [number, setNumber] = useState(0)

  const carculateNumber = () => {
    setNumber(number + 1)
  }

  return (
    <div className="App">
      <p>hello react + typescript</p>
      <button onClick={carculateNumber}>+</button>
      <b>{number}</b>
    </div>
  );
}

export default App;
