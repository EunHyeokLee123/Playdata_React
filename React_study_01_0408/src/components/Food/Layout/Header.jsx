import React from 'react';
// @ts-ignore
import styles from './Header.module.scss';
// @ts-ignore
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={onShowCart} />
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='Looks very delicious meals' />
      </div>
    </>
  );
};

export default Header;
