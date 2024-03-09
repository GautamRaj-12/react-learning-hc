import './App.css';
import { UserContextProvider } from './context/UserContextProvider';
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

  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
        <UserContextProvider>
          <HeroInput />
          <UserContent />
        </UserContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
