import React from 'react';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
        <p className="footer__left">&copy; 2014&ndash;{new Date().getFullYear()} Станислав Козин</p>
        <p className="footer__right">Эл. почта: <a href="mailto:stas@staskozin.ru">stas@staskozin.ru</a></p>
    </footer>
  )
}
