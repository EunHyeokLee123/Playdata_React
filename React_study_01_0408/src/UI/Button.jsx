import React from 'react';
import './Button.css';

const Button = ({ children, type, className, onClick, disabled }) => {
  // ?? : null 병합 연산자 -> 좌항의 변수가 null 혹은 undefined일 경우
  // 우항의 값을 대체. className이 null 또는 undefined이면 ''가 입력됨.
  const cn = `button ${className ?? ''}`;

  return (
    // props로 받은 type, 이벤트, 버튼 글씨 등
    // 버튼을 구성할 때 필요한 모든 요소를 받음.
    <button type={type} className={cn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

/*
import styled from 'styled-components';
*/

// styled-components를 활용하여 리엑트 컴포넌트 생성
// 생성과 동시에 요소에 스타일을 문자열로 지정
// html에서 제공하는 type, onClick 속성은 자동으로 처리해줌.
// 커스텀 props 같은 경우에는 템플릿 리터럴을 통해 동적으로 처리가 가능함.
// 별도의 css파일 없이 style을 먹일 수 있음.

/*
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  ${(props) => props.className && `${props.className}`}

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

*/

export default Button;
