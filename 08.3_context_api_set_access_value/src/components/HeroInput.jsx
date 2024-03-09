import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const HeroInput = () => {
  const { setUser } = useContext(UserContext);
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      <div className='hero-input flex justify-center flex-wrap items-center gap-6 py-4'>
        <h2 className='bg-rose-700 px-3 py-2 rounded-lg'>Choose your hero</h2>
        <div className='flex gap-3'>
          <input
            type='radio'
            name='hero'
            id='superman'
            value='Superman'
            onChange={handleChange}
            className='accent-rose-600'
          />
          <label htmlFor='superman'>Superman</label>
          <input
            type='radio'
            name='hero'
            id='batman'
            value='Batman'
            onChange={handleChange}
            className='accent-rose-600'
          />
          <label htmlFor='batman'>Batman</label>
          <input
            type='radio'
            name='hero'
            id='wonderwoman'
            value='Wonderwoman'
            onChange={handleChange}
            className='accent-rose-600'
          />
          <label htmlFor='wonderwoman'>Wonderwoman</label>
        </div>
      </div>
    </>
  );
};

export default HeroInput;
