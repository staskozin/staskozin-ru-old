import React from 'react';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__left">
          <p>&copy; 2014&ndash;{new Date().getFullYear()} Станислав Козин</p>
          <p>Иконки штук &mdash; <a href="http://sergeychikin.ru/365/">Сергей Чикин</a></p>
        </div>
        
        <p className="footer__right">Эл. почта: <a href="mailto:stas@staskozin.ru">stas@staskozin.ru</a></p>
    </footer>
  )
}
