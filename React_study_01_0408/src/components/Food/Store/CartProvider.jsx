import React, { act, useReducer } from 'react';
import { CartContext } from './CartContext';

// 리듀서 함수 정의: 여러가지 복잡한 상태관리를 중앙 집중화
// state: 업데이트 전의 최신 상태
// action: 어떤 업데이트를 하는지에 대한 정보와 필요값들이 들어 있음. (dispatch에 의해 전달)
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // 기존 상태가 가지고 있는 카트 항목에 새로운 항목을 추가.
    // 기존 카트에 이미 추가된 메뉴인지 아닌지를 판단해야함
    // 이미 있는 메뉴라면 amount만 최신화

    // 배열 고차 함수 findIndex를 통해 새롭게 추가할 item의 id가
    // 기존 상품의 id인지를 비교해서 idx를 찾기
    const idx = state.items.findIndex((prev) => {
      return action.item.id === prev.id;
    });
    const existingItems = [...state.items]; // 기존 배열 복사
    // idx === -1이면 없는 요소라서 지정 안됨.
    let updateItems;
    if (idx === -1) {
      // 신규 item 추가
      updateItems = [...state.items, action.item];
    } else {
      existingItems[idx].amount += action.item.amount;
      updateItems = [...existingItems];
    }

    // 선택된 음식의 가격과 총액을 바탕으로 금액을 계산
    const updatePrice =
      state.totalPrice + action.item.price * action.item.amount;

    // 변경된 상태를 객체 형태로 리턴 -> cartState로 전달됨.
    return {
      items: updateItems,
      totalPrice: updatePrice,
    };
  } else if (action.type === 'REMOVE') {
    // 지우려는 아이템의 인덱스 탐색
    const idx = state.items.findIndex((prev) => {
      return action.id === prev.id;
    });
    const existingItems = [...state.items]; // 기존 배열 복사
    const updatePrice = state.totalPrice - existingItems[idx].price;

    // 1개만 있는 아이템이면 Cart에서 item 제거
    if (existingItems[idx].amount === 1) {
      existingItems.splice(idx, 1);
    }
    // 1개 이상 남아있으면 단순히 수량을 줄임
    else {
      existingItems[idx].amount--;
    }
    // 선택된 음식의 가격과 총액을 바탕으로 금액을 계산
    // remove는 무조건 하나만 감소됨
    return {
      items: existingItems,
      totalPrice: updatePrice,
    };
  }
};

// App.js에서 CartContext를 바로 provide 할 수도 있지만,
// Cart에 관련된 기능이 App.js에 있으면 기능별로 컴포넌트를 구분할 수 없기 때문에
// CartProvider를 생성해서 provider에 관련한 기능을 몰아주겠다.
const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalPrice: 0,
  });

  // 컨슈머들이 실제로 받아서 사용할 객체를 따로 정의
  // 밑에 value에 직접 써도 되는데, 길어질 까봐 따로 뺐어요.
  const cartContextData = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: (item) => {
      dispatchCartAction({
        type: 'ADD',
        item,
      });
    },
    removeItem: (id) => {
      dispatchCartAction({
        type: 'REMOVE',
        id,
      });
    },
  };

  console.log(cartState);

  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
