import React from 'react';
// @ts-ignore
import classes from './Navigation.module.css';

const Navigation = ({ isLoginValid, onLogOut }) => {
  return (
    <nav className={classes.nav}>
      {isLoginValid && (
        <ul>
          <li>
            <a href='#'>MyPage</a>
          </li>
          <li>
            <a href='#'>Admin</a>
          </li>
          <li>
            <button onClick={onLogOut}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
