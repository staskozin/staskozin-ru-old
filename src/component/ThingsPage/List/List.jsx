import React from 'react';
import { Link } from 'react-router-dom';

import './List.scss';

export default function List(props) {
  const { path } = props;
  return (
    <>
      <h1>Штуки</h1>
      <div className="things-list">
      <Link className="things-list__item" to={`${path}/rice-calculator`}>
          <img className="things-list__img" src="/img/things/rice.svg" alt="Калькулятор ингредиентов для риса" />
          <span className="things-list__text">Калькулятор ингредиентов для&nbsp;варки риса</span>
        </Link>
        <Link className="things-list__item" to={`${path}/transliterator`}>
          <img className="things-list__img" src="/img/things/mechanics.svg" alt="Транслитератор" />
          <span className="things-list__text">Транслитератор</span>
        </Link>
        <Link className="things-list__item" to={`${path}/concatenator`}>
          <img className="things-list__img" src="/img/things/paperclip-on-paper.svg" alt="Конкатенатор" />
          <span className="things-list__text">Конкатенатор</span>
        </Link>
        <Link className="things-list__item" to={`${path}/duplicate-remover`}>
          <img className="things-list__img" src="/img/things/page-not-found.svg" alt="Уничтожитель дубликатов" />
          <span className="things-list__text">Уничтожитель дубликатов</span>
        </Link>
      </div>
    </>
  )
}
