import React, { useRef, useState } from 'react';
// @ts-ignore
import styles from './AddUsers.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import ErrorModal from '../Modal/ErrorModal';

const AddUsers = ({ addUserList }) => {
  // 상태 변수 선언
  // const [userValue, setUserValue] = useState({
  //   userName: '',
  //   age: '',
  // });

  // useState와 다르게 사용자의 입력을 제어할 수 있는 변수
  // useRef 훅: 특정 요소를 참조할 수 있게 해주는 기능 (특정 요소를 기억)
  // useRef로 지목한 요소는 리렌더링 대상에 포함되지 않는다. -> useState와 차이점!!!
  // 불필요한 리렌더링을 피하고 싶을 때, useState가 아닌 useRef를 사용함

  // useRef는 단순 요소의 특정 속성을 얻고 싶거나, 불필요한
  // 렌더링을 방지하고 싶을 때 사용함.
  // 입력값이 변경될 때마다 특정 UI를 수정해야 할때(상태에 따라 리렌더링이 발생)
  // 는 사용하지 않는 것을 권장
  const nameInput = useRef();
  const ageInput = useRef();

  // 에러 상태를 관리하는 상태 변수
  const [error, setError] = useState(null);

  /*
    이름과 나이를 입력받아서, 가입하기 버튼을 누르면 가입 처리를 해 주세요.
    가입 처리? -> App.js에 있는 USER_LIST에 객체 형태로 추가.
    */

  const userSubmitHandler = (e) => {
    e.preventDefault();

    if (
      nameInput.current.value.trim() === '' ||
      ageInput.current.value.trim() === ''
    ) {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 공백이면 안됩니다.',
      });
      return;
    }
    if (+ageInput.current.value < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1이상의 숫자로 입력해야 합니다.',
      });
      return;
    }

    addUserList({
      userName: nameInput.current.value,
      age: ageInput.current.value,
    });
    nameInput.current.value = '';
    ageInput.current.value = '';
  };

  // const userNameChangeHandler = (e) => {
  //   setUserValue((prev) => ({ ...prev, userName: e.target.value }));
  // };
  // const ageChangeHandler = (e) => {
  //   setUserValue((prev) => ({ ...prev, age: e.target.value }));
  // };

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
          <input id='username' type='text' ref={nameInput} />
          <label htmlFor='age'>나이</label>
          <input id='age' type='number' ref={ageInput} />
          <Button type='submit'>가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
