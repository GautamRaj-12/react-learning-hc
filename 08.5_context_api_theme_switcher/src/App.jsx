import './App.css';
import { UserContextProvider } from './context/UserContext';
import HeroInput from './components/HeroInput';
import UserContent from './components/UserContent';
import { ThemeContextProvider } from './context/ThemeContext';
import { useEffect, useState } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const lightTheme = () => {
    setThemeMode('light');
  };
  const darkTheme = () => {
    setThemeMode('dark');
  };

  const [user, setUser] = useState('');
  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
        <UserContextProvider value={{ user, setUser }}>
          <HeroInput />
          <UserContent />
        </UserContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
