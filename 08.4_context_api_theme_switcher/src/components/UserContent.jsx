import React from 'react';
import Header from './Header';
import Hero from './Hero';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserContent = () => {
  const { user } = useContext(UserContext);
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
