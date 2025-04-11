import React, { useContext } from 'react';
// @ts-ignore
import styles from './CartItem.module.scss';
import { CartContext } from '../Store/CartContext';

const CartItem = ({ cart }) => {
  const { id, name, price, amount } = cart;

  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  const { addItem, removeItem } = useContext(CartContext);

  const cartAddItemHandler = (e) => {
    // + 버튼을 누르면 수량이 무조건 1이어야 한다.
    // cart 객체를 바로 넘기면 안된다. 여기서는 수량은 따로 관리하고 있지 않기 때문에
    // amount 프로퍼티 값을 1로 고정시켜서 입력해야 한다.
    addItem({
      ...cart,
      amount: 1,
    });
  };

  const cartRemoveItemHandler = (e) => {
    removeItem(id);
  };

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button onClick={cartRemoveItemHandler}>-</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
