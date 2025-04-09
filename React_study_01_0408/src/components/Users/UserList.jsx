import React from 'react';
import styles from './UserList.module.css';
import Card from '../../UI/Card';

const UserList = ({ userList }) => {
  // App.jsx에 있는 USER_LIST에 있는 회원 정보를 바탕으로
  // ul 안에 li를 추가해 주세요.

  return (
    <Card className={styles.users}>
      <ul>
        <li>이름: 홍길동, 나이: 18세</li>
        {userList.map((r, i) => (
          <li key={i}>
            이름: {r.userName}, 나이: {r.age}세
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
