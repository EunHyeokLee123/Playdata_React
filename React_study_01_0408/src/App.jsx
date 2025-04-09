import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import styles from './App.module.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
import Card from './UI/Card';

const App = () => {
  const USER_LIST = [];
  const [userList, setUserList] = useState(USER_LIST);

  const addUserList = (user) => {
    setUserList((prev) => [...prev, user]);
  };

  return (
    <div>
      <AddUsers addUserList={addUserList} />
      <UserList userList={userList} />
    </div>
  );
};

export default App;
