## useEffect
- The useEffect hook in React is used to perform side effects in functional components. It allows you to execute code after the component has been rendered to the screen. Common use cases include data fetching, subscriptions, or manually changing the DOM.

```
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Your code here will run after each render
    console.log('Component rendered or updated');
    
    // Cleanup function (optional)
    return () => {
      console.log('Component will unmount or update');
      // Perform cleanup tasks (e.g., unsubscribe from subscriptions)
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}
```

## useCallback
- The useCallback hook is used to memoize functions, preventing unnecessary re-creation of functions on each render. It's particularly useful when passing functions as props to child components to optimize performance.

```
import React, { useCallback } from 'react';

function ParentComponent() {
  const handleCallback = useCallback(() => {
    // Your function logic here
    console.log('Callback function invoked');
  }, []); // Empty dependency array means the function won't change across renders

  return (
    <ChildComponent callback={handleCallback} />
  );
}

function ChildComponent({ callback }) {
  // Use the callback function
  return (
    <button onClick={callback}>Click me</button>
  );
}
```

## useRef
- The useRef hook is used to create mutable object references that persist across renders. It is commonly used to access and interact with DOM elements or to persist values without causing re-renders.

- useRef can be considered a substitute for document.querySelector and similar DOM manipulation methods.

```
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    // Access and manipulate the DOM element using the ref
    myRef.current.focus();
  }, []);

  return (
    <input ref={myRef} type="text" />
  );
}
```

### Example
```
import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  // State hooks
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook for accessing the password input element
  const passwordRef = useRef(null);

  // useCallback hook to memoize the password generation function
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // useCallback hook to memoize the function for copying the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect hook to run the password generation function on component mount and whenever relevant dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className='w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md'>
      <h1 className='my-3 text-center text-white'>Password generator</h1>
      <div className='flex mb-4 overflow-hidden rounded-lg shadow'>
        {/* Password input field */}
        <input
          type='text'
          value={password}
          className='w-full px-3 py-1 outline-none'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        {/* Copy to clipboard button */}
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          copy
        </button>
      </div>
      {/* Password generation options */}
      <div className='flex text-sm gap-x-2'>
        {/* Password length slider */}
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        {/* Checkbox for including numbers */}
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        {/* Checkbox for including characters */}
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
```