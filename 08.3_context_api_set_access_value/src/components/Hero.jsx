import { useContext } from 'react';
import Friends from './Friends';
import Profile from './Profile';
import UserContext from '../context/UserContext';

const Hero = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <section className='hero mb-2'>
        <h2 className='text-center text-2xl font-semibold mb-2'>
          <span className='font-semibold italic font-mono'>{user}'s</span>{' '}
          friends and profile
        </h2>
        <div className='friends-profile grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <Friends />
          <Profile />
        </div>
      </section>
    </>
  );
};
export default Hero;
