import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Friends = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <section className='friends flex justify-center items-center text-xl dark:bg-slate-900 bg-slate-200 shadow-xl md:h-[400px] h-[300px]'>
        <div>
          <h2 className='font-semibold text-2xl'>
            <span className='font-semibold italic font-mono'>{user}'s</span>{' '}
            friend list
          </h2>
          <ul className='list-disc ml-5'>
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
