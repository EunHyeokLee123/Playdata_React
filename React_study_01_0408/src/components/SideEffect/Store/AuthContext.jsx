import React, { useState } from 'react';

// 로그인 상태를 전역적으로 관리하기 위해
// Context를 선언함.
export const AuthContext = React.createContext({
  isLoginValid: false,
  // Context 안에 함수도 담아서 제공 가능
  // 초기값은 함수의 형태다 라는 것만 명시
  changeLoginStatus: (flag) => {},
});

// 전역 컨텍스트 내부에서 사용하는 프로퍼티를 상테값으로 관리하기 위한 전용 컴포넌트
// 화면에 렌더링할 목적이 아닌, useState를 선언할 용도로 만드는 컴포넌트
// Context 선언부에는 useState를 사용하지 못함.
// 리엑트 훅은 리엑트 컴포넌트(.jsx)에서만 사용 가능
export const AuthContextProvider = (props) => {
  // 로그인 상태를 관리하는 변수수
  const [isLoginValid, setIsLoginValid] = useState(false);

  // isLoginValid 전역 상태 변수의 값을 변경할 용도로 제공할 함수
  const changeLoginStatus = (flag) => {
    setIsLoginValid(flag);
  };

  return (
    <AuthContext.Provider value={{ isLoginValid, changeLoginStatus }}>
      {props.children}
    </AuthContext.Provider>
  );
};
