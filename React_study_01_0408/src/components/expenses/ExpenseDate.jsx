import './ExpenseDate.css';
import React from 'react';

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate().toString().padStart(2, '0');
  // padStart(길이, 문자열), 문자열의 길이를 지정하고, 남는 길이를 매개변수의 문자열로 채움
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
