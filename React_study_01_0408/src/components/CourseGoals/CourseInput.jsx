import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../../UI/Button';

const CourseInput = ({ onAdd }) => {
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
      <div className='form-control'>
        <label
          style={{
            color: isValid ? 'black' : 'red',
          }}
        >
          나의 목표
        </label>
        <input
          type='text'
          value={enteredText}
          onChange={handleInput}
          style={{
            background: isValid ? 'transparent' : 'salmon',
            borderColor: isValid ? 'black' : 'red',
          }}
        />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
