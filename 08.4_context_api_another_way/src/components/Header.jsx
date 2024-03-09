import useUser from '../context/UserContext';

const Header = () => {
  const { user } = useUser();
  return (
    <>
      <header className='p-4 mb-2 text-2xl font-bold text-center dark:bg-slate-800 bg-slate-200'>
        <h2>
          Hello, <span className='font-mono italic'>{user}</span>
        </h2>
      </header>
    </>
  );
};
export default Header;
