import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({ items, onRemove }) => {
  return (
    <ul className='goal-list'>
      {items.map((goal) => (
        <CourseItem item={goal} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default CourseList;
