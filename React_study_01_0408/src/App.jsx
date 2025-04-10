import React from 'react';
// @ts-ignore
import styles from './App.module.css';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';

const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Login />
      </main>
    </>
  );
};

export default App;
