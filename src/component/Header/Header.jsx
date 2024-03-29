import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import ImgWebp from '../misc/ImgWebp';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
      <NavLink exact={true} to="/" className="logo__link" activeClassName="selected">
        <ImgWebp className="img" src="/img/stas-krug.png" alt="Аватарка" />
        <span className="text" >Станислав Козин</span>
      </NavLink>
      </div>

      <div className="links">
        <NavLink exact={true} to="/things" activeClassName="selected">Штуки</NavLink>
        <a href="https://vk.com/staskozin">ВК</a>
        <a href="https://github.com/staskozin">Гитхаб</a>
      </div>
    </header>
  )
}
