import React, { useEffect, useRef, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    // This effect will run whenever the component renders
    console.log('Component has rendered.');
  });

  const handleIncrement = () => {
    setCount(count + 1); // This will trigger a re-render
    countRef.current += 1; // This will NOT trigger a re-render
  };

  console.log('Rendering component.');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default MyComponent