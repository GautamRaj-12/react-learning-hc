import Friends from './Friends';
import Profile from './Profile';

const Hero = ({ username }) => {
  return (
    <>
      <section className='hero mb-2'>
        <h2 className='text-center text-2xl font-semibold mb-2'>
          <span className='font-semibold italic font-mono'>{username}'s</span>{' '}
          friends and profile
        </h2>
        <div className='friends-profile grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <Friends username={username} />
          <Profile username={username} />
        </div>
      </section>
    </>
  );
};
export default Hero;
