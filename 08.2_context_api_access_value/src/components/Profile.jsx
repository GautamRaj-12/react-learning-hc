import Group from './Group';

const Profile = ({ username }) => {
  return (
    <>
      <section className='profile flex justify-center items-center shadow-xl bg-slate-900 md:h-[400px] h-[300px]'>
        <Group username={username} />
      </section>
    </>
  );
};

export default Profile;
