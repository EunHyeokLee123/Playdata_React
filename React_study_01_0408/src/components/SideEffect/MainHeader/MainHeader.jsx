import React from 'react';
import Navigation from '../Navigation/Navigation';
// @ts-ignore
import classes from './MainHeader.module.css';

const MainHeader = ({ onLogOut }) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogOut={onLogOut} />
    </header>
  );
};

export default MainHeader;
