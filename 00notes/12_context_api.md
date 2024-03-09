## Context / Passing data deeply with context

### The Problem - Prop Drilling

- Usually, we will pass information from a parent component to a child component via props.
- But passing props can become verbose and inconvenient if we have to pass them through many components in the middle, or if many components in our app need the same information.
- **CONTEXT** lets the parent component make some information available to any component in the tree below it - no matter how deep without passing it explicitly through props.

- Problem with passing props - **PROP DRILLING**
- The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called PROP DRILLING.

- Consider the following situation:

![alt text](image-11.png)

- We have mulitple components, A `<Header/>` component then its sibling `<Hero/>` component. Inside this we have two more comonents: `<Friends/>` and `<Profile/>` and Inside `<Profile/>` there is `<Group/>` component.
- And as we can see, the word "Superman" appears at multiple place. It is present in `Header`, `Hero`, `Friends` and `Group` components.
- Let's suppose "Superman" is the username. Then how would we pass this to the required components.
- In this case we will have username in our `<App/>` component, from there, we will pass it to `<Header/>` and `<Hero/>` component and from `<Hero/>` we will pass it to `<Friends/>` and `<Profile>`. Althought the `<Profile/>` component doesn't use this value, But to get the username to the `<Group/>` component, we need to send username through `<Profile/>` to `<Group/>`

- This is what is known as **Prop Drilling** as defined above.

- To solve this issue **Context** is used.

### Using Context to solve prop drilling

- There are three steps involved in context api
  1. Create the context
  2. Provide the context
  3. Use the context

### Solving the username prop drilling problem using Context - 1st way

- `UserContext.js`

```
import { createContext } from 'react';
const UserContext = createContext();
export default UserContext;
```

- `UserContextProvider.jsx`

```
import { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
```

- `App.jsx`

```
import './App.css';
import { UserContextProvider } from './context/UserContextProvider';
import HeroInput from './components/HeroInput';
import UserContent from './components/UserContent';

function App() {
  return (
    <>
      <UserContextProvider>
        <HeroInput />
        <UserContent />
      </UserContextProvider>
    </>
  );
}

export default App;
```

- `HeroInput.jsx`

```
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const HeroInput = () => {
  const { setUser } = useContext(UserContext);
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      <div className='hero-input flex justify-center flex-wrap items-center gap-6 py-4'>
        <h2 className='bg-rose-700 px-3 py-2 rounded-lg'>Choose your hero</h2>
        <div className='flex gap-3'>
          <input
            type='radio'
            name='hero'
            id='superman'
            value='Superman'
            onChange={handleChange}
            className='accent-rose-600'
          />
          <label htmlFor='superman'>Superman</label>
          <input
            type='radio'
            name='hero'
            id='batman'
            value='Batman'
            onChange={handleChange}
            className='accent-rose-600'
          />
          <label htmlFor='batman'>Batman</label>
          <input
            type='radio'
            name='hero'
            id='wonderwoman'
            value='Wonderwoman'
            onChange={handleChange}
            className='accent-rose-600'
          />
          <label htmlFor='wonderwoman'>Wonderwoman</label>
        </div>
      </div>
    </>
  );
};

export default HeroInput;
```

- `UserContent.jsx`

```
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserContent = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {user === '' ? null : (
        <>
          <Header /> <Hero />
        </>
      )}
    </>
  );
};

export default UserContent;
```

- `Header.jsx`

```
import UserContext from '../context/UserContext';
import { useContext } from 'react';
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <header className='text-2xl font-bold text-center bg-slate-800 p-4 mb-2'>
        <h2>
          Hello, <span className='italic font-mono'>{user}</span>
        </h2>
      </header>
    </>
  );
};
export default Header;
```

- `Hero.jsx`

```
import { useContext } from 'react';
import Friends from './Friends';
import Profile from './Profile';
import UserContext from '../context/UserContext';

const Hero = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <section className='hero mb-2'>
        <h2 className='text-center text-2xl font-semibold mb-2'>
          <span className='font-semibold italic font-mono'>{user}'s</span>{' '}
          friends and profile
        </h2>
        <div className='friends-profile grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <Friends />
          <Profile />
        </div>
      </section>
    </>
  );
};
export default Hero;
```

- And similarly we can do this in any component.
