import React from 'react';
import useUser from '../context/UserContext';

const HeroInput = () => {
  const { setUser } = useUser();
  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <>
      <div className='flex flex-wrap items-center justify-center gap-6 py-4 hero-input'>
        <h2 className='px-3 py-2 font-semibold text-white rounded-lg bg-rose-700'>
          Choose your hero
        </h2>
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
