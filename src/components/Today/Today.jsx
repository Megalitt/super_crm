import React from 'react';
import cls from './Today.module.css';
import Avatar from '..//../images/Avatar.svg';
import Restange from '..//../images/Rectangle 5703.svg'
import { faker } from '@faker-js/faker';

const Today = ({title, completed}) => {

  const date = faker.date.betweens({ from: '2020-01-20T00:00:00.000Z', to: '2023-01-30T00:00:00.000Z', count: 2 });
  const startDate = `${date[0]}`.split(' ');
  const endDate = `${date[1]}`.split(' ');
  const description = faker.lorem.lines(1);
  const teg_2 = faker.lorem.slug(1);
  const teg_1 = faker.lorem.slug(1);

  return (
    <div className={cls.Today}>
      <div className={cls.main}>
        <div className={cls.title}>
          <input className={cls.check} type="checkbox" checked={completed} />
          <div className={cls.text}>{title}</div>
        </div>
        <div className={cls.date}>
          <div>{`${startDate[1]} ${startDate[2]}, ${startDate[4].substring(0, 5)}`}</div>
          <div>{`${endDate[1]} ${endDate[2]}, ${endDate[4].substring(0, 5)}`}</div>
        </div>
        <div className={cls.description}>{description}</div>
        <div className={cls.tags}>
          <div className={cls.tag}>
            <div className={cls.tag1}>{teg_1}</div>
            <div className={cls.block}>
              <div className={cls.tag2}>{teg_2}</div>
              <img src={Restange} alt="none" />
            </div>
          </div>
          <img src={Avatar} alt="none" />
        </div>
      </div>
    </div>
  );
};

export default Today;