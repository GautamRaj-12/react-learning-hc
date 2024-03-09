import './App.css';
import { UserContextProvider } from './context/UserContext';
import HeroInput from './components/HeroInput';
import UserContent from './components/UserContent';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  return (
    <>
      <UserContextProvider value={{ user, setUser }}>
        <HeroInput />
        <UserContent />
      </UserContextProvider>
    </>
  );
}

export default App;
