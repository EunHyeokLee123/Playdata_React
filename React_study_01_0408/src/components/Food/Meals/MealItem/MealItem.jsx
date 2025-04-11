import React, { useContext } from 'react';
// @ts-ignore
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
import { CartContext } from '../../Store/CartContext';

const MealItem = ({ id, price, description, name }) => {
  const { meal, description: desc, price: priceStyle } = styles;

  // 금액 자리수 표시
  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  // 카트에 음식의 정보와 수량을 보내자
  // 카트 정보는 Context로 관리중임
  // -> useContext를 이용하여 필요한 함수만 디스트럭쳐링
  const { addItem } = useContext(CartContext);

  // MealItemForm에게 넘길 함수 -> 수량을 받아오기 위해
  const addToCartHandler = (amount) => {
    const newItem = {
      id,
      name,
      price: +price,
      amount: +amount,
    };
    addItem(newItem);
  };

  return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm id={id} onAddCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
