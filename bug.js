```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount, similar to componentDidMount
    console.log('Mounted!'); //This will log only once
    return () => {
      // Cleanup function (runs before component unmounts)
      console.log('Unmounted!'); //this will never be logged
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```