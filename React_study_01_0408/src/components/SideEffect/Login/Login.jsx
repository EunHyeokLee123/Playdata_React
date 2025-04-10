import React, { useEffect, useReducer, useState } from 'react';
import Card from '../../../UI/Card';
// @ts-ignore
import styles from './Login.module.css';
import Button from '../../../UI/Button';

const initialLoginState = {
  enteredEmail: '',
  enteredPW: '',
  emailIsValid: null,
  pwIsValid: null,
};

// 리듀서 함수 선언
/*
   이 컴포넌트에서 사용하는 모든 상태와 상태 변경을 중앙 제어하는 함수.
   컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하기 때문에
   컴포넌트 바깥쪽에 선언하는 것이 일반적입니다.
   
   param1 - state: 변경 전의 상태값
   param2 - action: dispatch함수(상태 변경 등의 행동)가 전달한 상태 변경 객체
   return: 관리할 상태값들을 반환
 */

const loginReducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL_INPUT':
      return {
        ...state,
        enteredEmail: action.val,
      };
    case 'PASSWORD_INPUT':
      return {
        ...state,
        enteredPW: action.val,
      };
    case 'EMAIL_VALID':
      return {
        ...state,
        emailIsValid: state.enteredEmail.includes('@'),
      };
    case 'PASSWORD_VALID':
      return {
        ...state,
        pwIsValid: state.enteredPW.trim().length > 6,
      };
    default:
      return state;
  }
};

const Login = ({ onLogin }) => {
  // loginReducer 함수를 사용해보자
  /*
     param1 - reducer function: 위에서 만든 리듀서 함수
     param2 - initial state: 초기 상태값
     return1 - 로그인 관련 상태변수
     return2 - dispatch함수: 상태를 변경할 수 있는 함수
  */
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // 디스트럭쳐링으로 상태값 추출
  const { enteredEmail, enteredPW, emailIsValid, pwIsValid } = loginState;

  useEffect(
    () => {
      // setTimeout을 통해 유효성 검증을 입력이 끝난 1초 뒤에 실행되게 함.
      // 1초 이내에 새로운 입력값이 들어오면, useEffect가 다시 실행되면서
      // 또다른, setTimeout이 실행됨 -> 너무 많은 중복 타이머
      const timer = setTimeout(() => {
        dispatch({ type: 'EMAIL_VALID' });
        dispatch({ type: 'PASSWORD_VALID' });
      }, 1000);
      // useEffect의 cleanup 함수
      // 컴포넌트가 업데이트 되거나 없어지기 직전에 실행됨.
      // 사용자가 1초 이내에 추가 입력 -> 상태 변경(컨포넌트가 리렌더링)
      // -> 타이머 취소 (유효성 검증을 취소)
      // -> 마지막에 발생한 이벤트에 대해서만 타이머가 걸림.
      return () => {
        clearTimeout(timer);
      };
    },
    // 상태 변수가 변경되면, 콜백함수가 실행되게 함.
    [enteredEmail, enteredPW],
  );

  const submitHandler = (e) => {
    e.preventDefault();

    onLogin(enteredEmail, enteredPW);
  };

  // 이메일의 입력값이 변경될 때마다 실행한 이벤트 핸들러
  const emailChangeHandler = (e) => {
    // reducer의 상태 변경은 dispatch 함수를 통해서 처리
    // dispatch함수의 매개값 객체의 key는 정해진 것이 아닌,
    // reducer 함수에서 구분하기 위해 붙여주는 이름.
    // 프로퍼티의 key와 value는 자유롭게 줄 수 있습니다. (정해진 게 아님!)
    dispatch({
      type: 'EMAIL_INPUT', // 변경되는 데이터의 타입
      val: e.target.value, // 변경되는 데이터 값
    });
  };

  // 비밀번호의 입력값이 변경될 때마다 실행할 이벤트 핸들러
  const pwChangeHandler = (e) => {
    dispatch({
      type: 'PASSWORD_INPUT',
      val: e.target.value,
    });
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
            // onBlur={validateEmailHandler} // blur는 focus의 반대
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
            // onBlur={validatePWHandler}
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
