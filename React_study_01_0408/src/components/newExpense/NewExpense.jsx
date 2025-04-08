import React from 'react';
import './newExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  return (
    <div className='new-expense'>
      <ExpenseForm onSave={onAddExpense} />
    </div>
  );
};

export default NewExpense;
