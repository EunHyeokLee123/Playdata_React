import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

const App = () => {
  // 목표 데이터의 상태 관리 배열
  const [goals, setGoals] = useState([]);

  // CourseInput에게 전달할 함수
  const onAddGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const onRemoveGoal = (id) => {
    // 필터를 통해 기존의 배열을 받아서, 해당 id를 가진 goal을
    // 배열의 filter로 걸러냄
    setGoals((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={onAddGoal} />
      </section>
      <section id='goals'>
        <CourseList items={goals} onRemove={onRemoveGoal} />
      </section>
    </div>
  );
};

export default App;
