import useUser from '../context/UserContext';

const Friends = () => {
  const { user } = useUser();
  return (
    <>
      <section className='friends flex justify-center items-center text-xl dark:bg-slate-900 bg-slate-200 shadow-xl md:h-[400px] h-[300px]'>
        <div>
          <h2 className='text-2xl font-semibold'>
            <span className='font-mono italic font-semibold'>{user}'s</span>{' '}
            friend list
          </h2>
          <ul className='ml-5 list-disc'>
            {user !== 'Batman' ? <li>Batman</li> : null}
            {user !== 'Wonderwoman' ? <li>Wonder Woman</li> : null}
            {user !== 'Superman' ? <li>Superman</li> : null}
            <li>Flash</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Friends;
