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
