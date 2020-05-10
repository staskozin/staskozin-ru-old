import React from 'react';
import ReactFitText from 'react-fittext-fix';

import './Square.scss';

export default function Square(props) {
  const { link, header, text, tags, css_class } = props.data;
  return (
    <div className={`square square_${css_class}`} key={css_class}>
      <div className="square__content">
        {
          link &&
          <a className="square__link" href={link}></a>
        }
        {/* <h3 className="square__header">{header}</h3> */}
        <ReactFitText compressor={.9}>
          <p className="square__header">{header}</p>
        </ReactFitText>
        <div className="square__footer">
          <ReactFitText compressor={2}>
            <p className="square__text">{text}</p>
          </ReactFitText>
          <ReactFitText compressor={2.5}>
            <ul className="square__tags">
              {
                tags.map(tag => {
                  return (
                    <li className="square__tag" key={css_class + tag}>#{tag}</li>
                  )
                })
              }
            </ul>
          </ReactFitText>
        </div>
      </div>
    </div>
  )
}
