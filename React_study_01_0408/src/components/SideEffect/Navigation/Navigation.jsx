import React, { useContext } from 'react';
// @ts-ignore
import classes from './Navigation.module.css';
import { AuthContext } from '../Store/AuthContext';

const Navigation = ({ onLogOut }) => {
  // Context store에 좀 더 쉽게 접근해서 소비할 수 있게
  // 도와주는 useContext 훅
  // 필요하다면 객체 디스트럭쳐링을 통해 전역 객체를 분해해서 사용가능
  const { isLoginValid } = useContext(AuthContext);
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
