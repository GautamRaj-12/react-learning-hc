import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { UserContextProvider } from './context/UserContextProvider';

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Hero />
      </UserContextProvider>
    </>
  );
}

export default App;
