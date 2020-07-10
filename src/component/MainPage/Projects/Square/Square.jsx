import React from 'react';
import ReactFitText from 'react-fittext-fix';

import './Square.scss';

export default function Square(props) {
  const { link, header, text, tags, img, imgHover, css_class } = props.data;
  return (
    <div className={`square square_${css_class}`} key={css_class}>
      {
        img
          ? <img className="square__background" src={img} alt={header} />
          : null
      }
      {
        imgHover
          ? <img className="square__background square__background_hover" src={imgHover} alt={header} />
          : null
      }
      <div className="square__content">
        {
          link &&
          <a className="square__link" href={link}></a>
        }
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
                tags
                  ? tags.map(tag => <li className="square__tag" key={css_class + tag}>#{tag}</li>)
                  : <li className="square__tag"><a href={link}>{link.replace(/^(https?:|)\/\//, '')}</a></li>
              }
            </ul>
          </ReactFitText>
        </div>
      </div>
    </div>
  )
}
