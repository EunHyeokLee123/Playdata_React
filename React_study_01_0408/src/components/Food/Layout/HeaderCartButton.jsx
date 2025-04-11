import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../Store/CartContext';
// @ts-ignore
import styles from './HeaderCartButton.module.scss';
import React, { useContext, useEffect, useState } from 'react';

const HeaderCartButton = ({ onShow }) => {
  // bump 애니메이션을 제어하는 상태 변수
  const [isBump, setIsBump] = useState(false);

  const { button, icon, badge, bump } = styles;

  const { items } = useContext(CartContext);

  // 배열 누산 합계 함수: reduce
  const numberOfCart = items.reduce((accu, item) => (accu += item.amount), 0);

  useEffect(
    () => {
      setIsBump(true);

      // 다음 담기 애니메이션을 보여주기 위해서는
      // bump라는 클래스 이름을 제거해야 함.
      // 단, 애니메이션 동작 시간이 0.3초이므로,
      // 0.3초 이후(애니메이션 동작 완료 후)에 bump 클래스를 삭제하자.
      const timer = setTimeout(() => {
        setIsBump(false);
      }, 300);

      return () => {
        // cleanup 함수를 이용하여 0.3초 이내에 새로운 렌더링이 발생하면
        // 기존의 timeout 함수를 취소한다.
        // 애니메이션이 버벅이는 것을 방지하기 위해서
        clearTimeout(timer);
      };
    },
    // items 카트의 상태가 변화할 때마다 useEffect를 실행하겠다!
    [items],
  );

  return (
    <button className={`${button} ${isBump ? bump : ''}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
