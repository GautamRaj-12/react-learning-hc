import React, { useContext } from 'react';
import useUser from '../context/UserContext';
import useTheme from '../context/ThemeContext';

const HeroInput = () => {
  const { setUser } = useUser();
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
