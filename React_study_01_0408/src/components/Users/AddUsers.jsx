import React, { useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import ErrorModal from '../Modal/ErrorModal';

const AddUsers = ({ addUserList }) => {
  // 상태 변수 선언
  const [userValue, setUserValue] = useState({
    userName: '',
    age: '',
  });

  // 에러 상태를 관리하는 상태 변수
  const [error, setError] = useState(null);

  /*
    이름과 나이를 입력받아서, 가입하기 버튼을 누르면 가입 처리를 해 주세요.
    가입 처리? -> App.js에 있는 USER_LIST에 객체 형태로 추가.
    */

  const userSubmitHandler = (e) => {
    e.preventDefault();

    if (userValue.userName.trim() === '' || userValue.age.trim() === '') {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 공백이면 안됩니다.',
      });
      return;
    }
    if (+userValue.age < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1이상의 숫자로 입력해야 합니다.',
      });
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
    <>
      {/* 단축 평가 연산을 활용한 컴포넌트의 조건부 렌더링
      error가 truthy 또는 falsy함에 따라서 우항의 컴포넌트를 드러낼 것인지
      아닌지 결정함. */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          // OK버튼 클릭 시 다시 에러상태를 null로
          onConfirm={() => setError(null)}
        />
      )}
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
    </>
  );
};

export default AddUsers;
