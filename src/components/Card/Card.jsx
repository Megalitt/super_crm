import React from 'react';
import cls from './Card.module.css';
import Header from '../Header/Header';
import Today from '../Today/Today';

const Card = ({res}) => {

  return (
    <div className={cls.Card}>
      <Header/>
      {res.map((el, i) => 
        <Today
          key={i}
          title={el.title} 
          completed={el.completed} 
        />
      )}
    </div>
  );
};

export default Card;