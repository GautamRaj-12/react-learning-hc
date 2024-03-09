import UserContext from '../context/UserContext';
import { useContext } from 'react';
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <header className='text-2xl font-bold text-center dark:bg-slate-800 bg-slate-200 p-4 mb-2'>
        <h2>
          Hello, <span className='italic font-mono'>{user}</span>
        </h2>
      </header>
    </>
  );
};
export default Header;
