import React, { useState } from 'react';
// import하는 이름은 커스텀가능
// @ts-ignore
import styles from './CourseInput.module.css';
import Button from '../../UI/Button';

const CourseInput = ({ onAdd }) => {
  // module.css를 사용하면 css 내에서 사용한 클래스 이름을
  // 객체화해서 전달함.
  // css 모듈화의 장점: 여러 css 파일에 있는 클래스 이름 충돌을
  // 더이상 걱정하지 않아도 됨.
  // 변수명으로 파일을 구분하기 때문에 이름 짓는 것에 중복걱정을 하지 않아도 됨
  // style의 출처를 쉽게 파악할 수 있는 장점이 있음.
  const { 'form-control': formControl, invalid } = styles;

  // 입력창 상태 변수
  const [enteredText, setEnteredText] = useState('');

  // 입력값이 유효한지에 대한 상태 변수
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    // 일단 submit 기능 비활성
    e.preventDefault();

    // submit 하기 전에 최종 입력값 검증
    if (!enteredText.trim()) {
      setIsValid(false);
      return;
    }

    // App.jsx(부모)에게 데이터를 매개값으로 전달
    onAdd({
      id: Math.random().toString(),
      text: enteredText,
    });

    // 전송이 끝나면 입력창 비우기
    setEnteredText('');
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;

    // 뭐라도 작성이 되었다면
    if (inputValue.trim().length > 0) {
      // 입력값 유효를 true로
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setEnteredText(e.target.value);
  };

  console.log(`isValid: ${isValid}`);

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${formControl} ${isValid ? '' : invalid}`}>
        <label>나의 목표</label>
        <input type='text' value={enteredText} onChange={handleInput} />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
