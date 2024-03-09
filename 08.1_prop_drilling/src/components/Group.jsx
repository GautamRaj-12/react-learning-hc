const Group = ({ username }) => {
  return (
    <>
      <h2 className='text-xl'>
        <span className='font-semibold italic font-mono'>{username}</span>{' '}
        belongs to DC Comics
      </h2>
    </>
  );
};

export default Group;
