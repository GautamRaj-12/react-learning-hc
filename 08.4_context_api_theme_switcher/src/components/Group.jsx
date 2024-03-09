import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Group = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2 className='text-xl'>
        <span className='font-semibold italic font-mono'>{user}</span> belongs
        to DC Comics
      </h2>
    </>
  );
};

export default Group;
