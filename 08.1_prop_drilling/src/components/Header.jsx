const Header = ({ username }) => {
  return (
    <>
      <header className='text-2xl font-bold text-center bg-slate-800 p-4 mb-2'>
        <h2>
          Hello, <span className='italic font-mono'>{username}</span>
        </h2>
      </header>
    </>
  );
};
export default Header;
