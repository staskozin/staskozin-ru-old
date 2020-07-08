import React from 'react';

import squares from './squares';

import './Projects.scss';
import Square from './Square/Square';

export default function Projects() {
  return (
    <>
      <div className="squares">
        {squares.filter(square => !square.archived).map(square => <Square data={square} key={square.css_class} />)}
      </div>
      <h2>Архивные проекты</h2>
      <div className="squares">
        {squares.filter(square => square.archived).map(square => <Square data={square} key={square.css_class} />)}
      </div>
    </>
  )
}
