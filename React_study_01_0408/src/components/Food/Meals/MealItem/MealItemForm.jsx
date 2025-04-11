import Input from '../../../../UI/Input';
// @ts-ignore
import styles from './MealItemForm.module.scss';
import React, { useState } from 'react';

const MealItemForm = ({ id, onAddCart }) => {
  // 수량의 상태를 관리하는 상태 변수
  const [amount, setAmount] = useState(1);

  // 수량이 변경될 때마다 발동하는 함수
  const amountHandler = (amount) => {
    setAmount(amount);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // submit이 발동하면 수량을 부모(MealItem)에게 넘기자
    onAddCart(amount);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        onAddAmount={amountHandler}
        label='수량'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>담기</button>
    </form>
  );
};
// form 태그안의 버튼은 type설정 안하면, 자동으로 submit임 (까먹지 말자)

export default MealItemForm;
