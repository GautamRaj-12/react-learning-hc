import React from 'react';
import Header from './Header';
import Hero from './Hero';
import useUser from '../context/UserContext';

const UserContent = () => {
  const { user } = useUser();
  return (
    <>
      {user === '' ? null : (
        <>
          <Header /> <Hero />
        </>
      )}
    </>
  );
};

export default UserContent;
