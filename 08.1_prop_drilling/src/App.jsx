import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const username = 'Superman';
  return (
    <>
      <div className='wrapper'>
        <Header username={username} />
        <Hero username={username} />
      </div>
    </>
  );
}

export default App;
