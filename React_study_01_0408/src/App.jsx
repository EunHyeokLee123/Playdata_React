import React, { useState } from 'react';
import './App.css';
import './components/Example';
import ExpenseItem from './components/expenses/ExpenseItem';
// @ts-ignore
import NewExpense from './components/newExpense/NewExpense';
import ExpenseFilter from './components/expenses/ExpenseFilter';
import Card from './UI/Card';

function App() {
  /*
    jsx : 리액트에서 사용하는 특수한 js문법, 태그를 그대로 쓰면 알아서 변환
     html처럼 보이지만, 실제로 html은 아님.

    - 규칙 :
    1. return안에있는 태그는 반드시 하나의 태그로 묶여야 함.
    2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
    <> 비어 놓으면 자동으로 React.Fragmnet로 인식함
    5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
  */

  // const $h1 = React.createElement('h1', null,'안뇽 React');

  const expenses = [
    { id: 1, title: '냠냠치킨', price: 19000, date: new Date(2023, 6, 19) },
    { id: 2, title: '양파', price: 5000, date: new Date(2022, 5, 20) },
    { id: 3, title: '도미노피자', price: 35000, date: new Date(2021, 3, 21) },
    { id: 4, title: '마라탕후루', price: 18000, date: new Date(2024, 11, 13) },
  ];

  // 지출 객체 배열을 상태 변수로 관리하기
  // 변화가 생기면 리렌더링을 하기 위해서
  const [expenseList, setExpenseList] = useState(expenses);

  // 선택된 연도값 상태 관리 (현재 연도를 초기값)
  // 연도가 바뀌면 렌더링을 다시 되게 하기 위해서
  const [filterdYear, setFilteredYear] = useState(
    new Date().getFullYear().toString(),
  );

  // 자식 컴포넌트인 ExpenseFilter에 내려줄 함수
  // 매개값으로 ExpenseFilter에서 선택된 연도를 받음.
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); // 사용자가 선택한 연도로 상태를 변경
  };

  // 자식 컴포넌트의 데이터를 부모 컴포넌트에서 받아내는 함수
  // props drilling
  const addExpenseHandler = (newEx) => {
    const modiEx = { id: expenseList[expenseList.length - 1].id + 1, ...newEx };
    // 기존 expenseList에 modiEx를 추가, setter를 통해서 변경해야 변화감지
    setExpenseList([...expenseList, modiEx]);
  };

  // 고차함수 filter를 따로 분리 -> 필터링 결과가 비었을 경우 없다고
  // 얘기하기 위해서
  const filteredItem = expenseList.filter(
    (r) => r.date.getFullYear().toString() === filterdYear,
  );

  // 조건부 렌더링을 위한 변수 -> 기본값으로 없다고 깔아놓음.
  // 변수에 p태그를 넣음.
  let expenseContent = <p>아직 등록된 지출이 없습니다.</p>;

  // 혹시 필터링 된 결과가 하나라도 존재한다면?
  // 필터링된 결과를 ExpenseItem으로 맵핑하자.
  if (filteredItem.length > 0) {
    expenseContent = filteredItem.map((r) => (
      <ExpenseItem
        key={r.id} // 반복문을 통해 같은 컴포넌트를 표현할 때, 각각을 구분할 수 있게
        title={r.title} // 해주는 props의 값값
        price={r.price}
        date={r.date}
      />
    ));
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className='expenses'>
        <ExpenseFilter onChangeFilter={filterChangeHandler} />
        {expenseContent}
      </Card>
    </>
  );
}

export default App;
