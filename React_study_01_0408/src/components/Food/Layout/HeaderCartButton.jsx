import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../Store/CartContext';
// @ts-ignore
import styles from './HeaderCartButton.module.scss';
import React, { useContext } from 'react';

const HeaderCartButton = ({ onShow }) => {
  const { button, icon, badge } = styles;

  const { items } = useContext(CartContext);

  // 배열 누산 합계 함수: reduce
  const numberOfCart = items.reduce((accu, item) => (accu += item.amount), 0);

  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
