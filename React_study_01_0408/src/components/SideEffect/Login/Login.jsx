import React, { useRef, useState } from 'react';
import Card from '../../../UI/Card';
// @ts-ignore
import styles from './Login.module.css';
import Button from '../../../UI/Button';

const Login = ({ onLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPW, setEnteredPW] = useState('');

  // 이메일 입력의 유효여부를 상태 변수로 관리
  const [emailIsValid, setEmailIsValid] = useState(); // 초기값 undefined
  const [pwIsValid, setPWIsValid] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit이 동작됨!');

    onLogin(enteredEmail, enteredPW);
  };

  // 이메일의 입력값이 변경될 때마다 실행한 이벤트 핸들러
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  // 비밀번호의 입력값이 변경될 때마다 실행할 이벤트 핸들러
  const pwChangeHandler = (e) => {
    setEnteredPW(e.target.value);
  };

  const validateEmailHandler = () => {
    // 이메일에 @ 여부
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePWHandler = () => {
    // 비밀번호 길이 확인
    setPWIsValid(enteredPW.trim().length > 6);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${!emailIsValid ? styles.invalid : ''}`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler} // blur는 focus의 반대
          />
        </div>
        <div
          className={`${styles.control} ${!pwIsValid ? styles.invalid : ''}`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={enteredPW}
            onChange={pwChangeHandler}
            onBlur={validatePWHandler}
          />
        </div>
        <div className={styles.actions}>
          {/* button은 disabled를 통해 비활성화 기능 구현가능
          true면 비활성, false면 활성 */}
          <Button
            type='submit'
            className={styles.btn}
            disabled={!(emailIsValid && pwIsValid)}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
