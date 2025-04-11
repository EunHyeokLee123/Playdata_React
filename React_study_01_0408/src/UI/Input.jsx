import React from 'react';
// @ts-ignore
import styles from './Input.module.scss';

const Input = ({ amt, input, label, onAddAmount }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input
        {...input}
        onChange={(e) => onAddAmount(e.target.value)}
        value={amt}
      />
    </div>
  );
};

export default Input;
