import React from 'react';
// @ts-ignore
import styles from './Input.module.scss';

const Input = ({ input, label, onAddAmount }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} onChange={(e) => onAddAmount(e.target.value)} />
    </div>
  );
};

export default Input;
