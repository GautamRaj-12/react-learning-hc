import Group from './Group';

const Profile = ({ username }) => {
  return (
    <>
      <section className='profile flex justify-center items-center shadow-xl dark:bg-slate-900 bg-slate-200 md:h-[400px] h-[300px]'>
        <Group username={username} />
      </section>
    </>
  );
};

export default Profile;
