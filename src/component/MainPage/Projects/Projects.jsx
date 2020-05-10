import React from 'react';

import squares from './squares';

import './Projects.scss';
import Square from './Square/Square';

export default function Projects() {
  return (
    <div className="squares">
      {squares.map(square => <Square data={square} key={square.css_class} />)}
    </div>
  )
}
