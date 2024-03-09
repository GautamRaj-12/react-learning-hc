import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import useTheme from '../context/ThemeContext';

const HeroInput = () => {
  const { setUser } = useContext(UserContext);
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <>
      <div className='hero-input flex justify-center flex-wrap items-center gap-6 py-4'>
        <h2 className='bg-rose-700 px-3 py-2 rounded-lg text-white font-semibold'>
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
        <div>
          <input
            type='checkbox'
            onChange={onChangeBtn}
            checked={themeMode === 'dark'}
          />
        </div>
      </div>
    </>
  );
};

export default HeroInput;
