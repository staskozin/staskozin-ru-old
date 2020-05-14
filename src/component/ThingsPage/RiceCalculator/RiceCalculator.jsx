import React, { useState } from 'react';

import './RiceCalculator.scss';

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
                  if (isNaN(Number(rice))) {
                    rice = null;
                  }
                  setRice(rice);
                  setOther(calculateProportions(rice));
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
      </div>
    </>
  )
}

function calculateProportions(rice) {
  const proportion = rice / 500;
  return {
    rice: Math.floor(rice),
    water: Math.floor(550 * proportion),
    vinegar: Math.floor(55 * proportion),
    sugar: Math.floor(45 * proportion),
    salt: Math.floor(5 * proportion)
  }
}
