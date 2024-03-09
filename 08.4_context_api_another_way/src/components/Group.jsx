import useUser from '../context/UserContext';

const Group = () => {
  const { user } = useUser();
  return (
    <>
      <h2 className='text-xl'>
        <span className='font-mono italic font-semibold'>{user}</span> belongs
        to DC Comics
      </h2>
    </>
  );
};

export default Group;
