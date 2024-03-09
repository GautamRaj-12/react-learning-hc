import Friends from './Friends';
import Profile from './Profile';
import useUser from '../context/UserContext';

const Hero = () => {
  const { user } = useUser();
  return (
    <>
      <section className='mb-2 hero'>
        <h2 className='mb-2 text-2xl font-semibold text-center'>
          <span className='font-mono italic font-semibold'>{user}'s</span>{' '}
          friends and profile
        </h2>
        <div className='grid grid-cols-1 gap-4 friends-profile sm:grid-cols-2'>
          <Friends />
          <Profile />
        </div>
      </section>
    </>
  );
};
export default Hero;
