const Friends = ({ username }) => {
  return (
    <>
      <section className='friends flex justify-center items-center text-xl bg-slate-900 shadow-xl md:h-[400px] h-[300px]'>
        <div>
          <h2 className='font-semibold text-2xl'>
            <span className='font-semibold italic font-mono'>{username}'s</span>{' '}
            friend list
          </h2>
          <ul className='list-disc ml-5'>
            <li>Batman</li>
            <li>Wonder Woman</li>
            <li>Flash</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Friends;
