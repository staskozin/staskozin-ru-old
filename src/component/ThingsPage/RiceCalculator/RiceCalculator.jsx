import React, { useState } from 'react';

import './RiceCalculator.scss';
import YouTube from '../../misc/YouTube/YouTube';

export default function RiceCalculator() {
  const [rice, setRice] = useState(500);
  const [other, setOther] = useState({
    water: 550,
    vinegar: 55,
    sugar: 45,
    salt: 5
  });

  return (
    <>
      <h1>Калькулятор ингредиентов для&nbsp;варки&nbsp;риса</h1>
      <div className="rice-calculator">
        <div className="rice-calculator__rice">
          <div className="rice-calculator__elem">
            <p className="rice-calculator__text rice-calculator__text_rice">Рис, г</p>
            <p className="rice-calculator__number">
              <input
                className="rice-calculator__input"
                type="number"
                min="1" max="999999"
                value={rice}
                onChange={(e) => {
                  const rice = e.target.value;
                  if (rice == 0) {
                    setRice(null);
                    setOther(calculateProportions(0));
                  } else {
                    setRice(Math.abs(rice));
                    setOther(calculateProportions(rice));
                  }
                }}
                onBlur={(e) => {
                  const rice = e.target.value < 1 ? 500 : e.target.value;
                  setRice(rice);
                  setOther(calculateProportions(rice));
                }}
              />
            </p>
          </div>
        </div>
        <div className="rice-calculator__other">
          <div className="rice-calculator__elem">
            <p className="rice-calculator__text">Вода</p>
            <p className="rice-calculator__number">
              {other.water}<span className="rice-calculator__unit">&nbsp;мл</span>
            </p>
          </div>
          <div className="rice-calculator__elem">
            <p className="rice-calculator__text">Соль</p>
            <p className="rice-calculator__number">
              {other.salt}<span className="rice-calculator__unit">&nbsp;г</span>
            </p>
          </div>
          <div className="rice-calculator__elem">
            <p className="rice-calculator__text">Сахар</p>
            <p className="rice-calculator__number">
              {other.sugar}<span className="rice-calculator__unit">&nbsp;г</span>
            </p>
          </div>
          <div className="rice-calculator__elem">
            <p className="rice-calculator__text">Уксус 3%</p>
            <p className="rice-calculator__number">
              {other.vinegar}<span className="rice-calculator__unit">&nbsp;мл</span>
            </p>
          </div>
        </div>
        <YouTube youtubeId={'Cht4NvRUz-s'} />
      </div>
    </>
  )
}

function calculateProportions(rice) {
  const proportion = Math.abs(rice / 500);
  return {
    water: Math.round(550 * proportion),
    vinegar: Math.round(55 * proportion),
    sugar: Math.round(45 * proportion),
    salt: Math.round(5 * proportion)
  }
}
