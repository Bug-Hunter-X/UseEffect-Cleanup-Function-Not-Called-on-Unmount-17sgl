```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    console.log('Mounted!');
    return () => {
      console.log('Unmounted!');
    };
  }, []);

  const handleUnmount = () => {
    setShouldRender(false);
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}

export default MyComponent;
```