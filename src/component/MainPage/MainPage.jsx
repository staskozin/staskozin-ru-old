import React from 'react';

import Projects from './Projects/Projects';

import s from './MainPage.scss';

export default function MainPage() {
  return (
    <>
      <p className="paragraph about">Занимаюсь разработкой сайтов с&nbsp;2014&nbsp;года. Создаю и&nbsp;поддерживаю интернет-магазины и&nbsp;верстаю лендинги. Знаю HTML и&nbsp;CSS, пишу
на&nbsp;JavaScript, Python и&nbsp;немного на&nbsp;PHP. Владею фотошопом, иллюстратором, экселем и&nbsp;вордом.</p>
      <h1>Проекты</h1>
      <Projects />
    </>
  )
}
