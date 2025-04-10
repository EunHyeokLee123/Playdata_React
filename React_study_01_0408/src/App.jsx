import React, { useState } from 'react';
// @ts-ignore
import styles from './App.module.css';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';
import Home from './components/SideEffect/Home/Home';

const App = () => {
  // 서버로 로그인을 요청하는 함수.
  // 나중에는 fetch 등을 통해 서버로 비동기 요청이 실제로 들어감.

  // 로그인 상태를 관리하는 상태 변수
  const [isLoginValid, setIsLoginValid] = useState(false);

  const loginHandler = (email, pw) => {
    if (email === 'abc1234@naver.com' && pw === 'aaa1111') {
      // 로그인 성공으로 처리
      setIsLoginValid(true);

      // 브라우저가 제공하는 저장소 localStroage
      // 여기에 저장되는 데이터는
      // 새로고침이나 브라우저 종료에도 데이터가 계속 유지됨.
      // 로그인 했음을 의미하는 데이터를 저장.
      localStorage.setItem('login-flag', '1');
    } else {
      // 로그인 실패로 처리
      alert('로그인 실패입니다!');
    }
  };

  const logoutHandler = () => {
    setIsLoginValid(false);
    // 로그아웃하면 localStroage의 login여부 데이터 삭제
    localStorage.removeItem('login-flag');
  };

  // 화면이 렌더링 될 때 localStroage를 확인해서
  // login-flag라는 데이터가 있다면 로그인 상태를 변경하자!
  // 로그인 후, 새로고침이나 브라우저 종료 후 재접속 시 로그인 상태 유지를 위해서
  const storedLoginFlag = localStorage.getItem('login-flag');
  // login-flag가 있다면 로그인했으니 바로 Home으로 이동하게 true
  if (storedLoginFlag === '1') {
    setIsLoginValid(true);
  }
  // login-flag가 없다면 로그인하지 않거나
  // 로그아웃한 것이니 로그인창으로 이동하게 false
  else {
    setIsLoginValid(false);
  }

  return (
    <>
      <MainHeader isLoginValid={isLoginValid} onLogOut={logoutHandler} />
      <main>
        {/* isLoginValid의 탐,거짓 여부에 따라 띄울 창을 결정 */}
        {isLoginValid && <Home />}
        {!isLoginValid && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;
