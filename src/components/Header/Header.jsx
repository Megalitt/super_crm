import React from 'react';
import cls from './Header.module.css';
import Plus from '../../images/add.svg';

const Header = () => {
  
  return (
    <div className={cls.Header}>
      <div>Today</div>
      <div className={cls.info}>
        <div className={cls.btn}><img src={Plus} alt="" /></div>
        <div className={cls.count}>{2}</div>
      </div>
    </div>
  );
};

export default Header;