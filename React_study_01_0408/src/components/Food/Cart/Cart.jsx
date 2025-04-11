import React, { useContext } from 'react';
// @ts-ignore
import styles from './Cart.module.scss';
import CartModal from '../../Modal/CartModal';
import { CartContext } from '../Store/CartContext';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
  const {
    'cart-items': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;

  // 실제 우리가 관리하는 Context의 cart 데이터를 바탕으로 렌더링하자.
  const { items, totalPrice } = useContext(CartContext);

  return (
    <CartModal onClose={onClose}>
      {/* 주문 내역(카트 안의 음식 내역) */}
      <ul className={cartItemStyle}>
        {items.map((cartItem) => {
          return <CartItem key={cartItem.id} cart={cartItem} />;
        })}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={onClose}>
          닫기
        </button>
        {items.length > 0 && <button className={button}>주문</button>}
      </div>
    </CartModal>
  );
};

export default Cart;
