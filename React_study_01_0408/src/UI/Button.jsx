import React from 'react';
import './Button.css';

const Button = ({ children, type, className, onClick }) => {
  // ?? : null 병합 연산자 -> 좌항의 변수가 null 혹은 undefined일 경우
  // 우항의 값을 대체. className이 null 또는 undefined이면 ''가 입력됨.
  const cn = `button ${className ?? ''}`;

  return (
    // props로 받은 type, 이벤트, 버튼 글씨 등
    // 버튼을 구성할 때 필요한 모든 요소를 받음.
    <button type={type} className={cn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
