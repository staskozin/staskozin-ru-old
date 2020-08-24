import React from 'react';
import ReactFitText from 'react-fittext';

import ImgWebp from '../../../misc/ImgWebp';

import './Square.scss';

export default function Square(props) {
  const { link, link_text, header, text, tags, img, imgHover, video, css_class } = props.data;
  return (
    <div className={`square square_${css_class}`} key={css_class}>
      {
        img && !video
          ? <ImgWebp className="square__background" src={img} alt={header} />
          : null
      }
      {
        imgHover && !video
          ? <ImgWebp className="square__background square__background_hover" src={imgHover} alt={header} />
          : null
      }
      {
        video
          ? <video className="square__background" src={video} autoPlay playsInline loop muted ></video>
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
            <div className="square__tags-wrap">
              <ul className="square__tags">
                {
                  link &&
                    <li className="square__tag square__tag_link"><a href={link}>{link_text}</a></li>
                }
              </ul>
              <ul className="square__tags">
                {
                  tags &&
                    tags.map(tag => <li className="square__tag" key={css_class + tag}>#{tag}</li>)
                }
              </ul>
            </div>
          </ReactFitText>
        </div>
      </div>
    </div>
  )
}
