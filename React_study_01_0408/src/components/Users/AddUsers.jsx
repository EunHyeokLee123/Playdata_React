import React, { useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

const AddUsers = ({ addUserList }) => {
  // 상태 변수 선언
  const [userValue, setUserValue] = useState({
    userName: '',
    age: '',
  });

  /*
    이름과 나이를 입력받아서, 가입하기 버튼을 누르면 가입 처리를 해 주세요.
    가입 처리? -> App.js에 있는 USER_LIST에 객체 형태로 추가.
    */

  const userSubmitHandler = (e) => {
    e.preventDefault();

    if (userValue.userName.trim() === '' || userValue.age.trim() === '') {
      return;
    }

    addUserList(userValue);
    setUserValue({ userName: '', age: '' });
  };
  const userNameChangeHandler = (e) => {
    setUserValue((prev) => ({ ...prev, userName: e.target.value }));
  };
  const ageChangeHandler = (e) => {
    setUserValue((prev) => ({ ...prev, age: e.target.value }));
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={userSubmitHandler}>
        <label htmlFor='username'>이름</label>
        <input
          id='username'
          type='text'
          onChange={userNameChangeHandler}
          value={userValue.userName}
        />
        <label htmlFor='age'>나이</label>
        <input
          id='age'
          type='number'
          onChange={ageChangeHandler}
          value={userValue.age}
        />
        <Button type='submit'>가입하기</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
