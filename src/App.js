import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  return (
    <div>
      {count}
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default App;
