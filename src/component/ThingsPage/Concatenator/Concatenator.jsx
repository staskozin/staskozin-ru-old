import React, { useState } from 'react';

import './Concatenator.scss';

export default function Concatenator() {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <>
      <h1>Конкатенатор</h1>
      <div className="concatenator">
        <div>
          <h2 className="things-label">Текст слева</h2>
          <input
            className="things-input-text"
            type="text"
            placeholder="data/new/"
            value={leftText}
            onChange={(e) => {
              setLeftText(e.target.value)
              setOutput(concatenate(e.target.value, input, rightText))
            }}
          />
          <h2 className="things-label">Текст справа</h2>
          <input
            className="things-input-text"
            type="text"
            placeholder=".jpg"
            value={rightText}
            onChange={(e) => {
              setRightText(e.target.value)
              setOutput(concatenate(leftText, input, e.target.value))
            }}
          />
          <h2 className="things-label">Исходный текст</h2>
          <textarea
            className="things-textarea things-textarea_concatenator-input"
            cols="30" rows="15"
            placeholder="benzinovye-gazonokosilki"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setOutput(concatenate(leftText, e.target.value, rightText))
            }}
          />
        </div>
        <div>
          <h2 className="things-label">Результат</h2>
          <textarea
            className="things-textarea things-textarea_concatenator-output"
            cols="30" rows="15"
            placeholder="data/new/benzinovye-gazonokosilki.jpg"
            value={output}
            onChange={(e) => { setOutput(e.target.value) }}
          />
        </div>
      </div>
    </>
  )
}

function concatenate(l, i, r) {
  const textLines = i.split(/\r?\n+/);
  let result = '';
  for (var i = 0; i < textLines.length; i++) {
    if (textLines[i] == '') continue;
    textLines[i] = l + textLines[i];
    textLines[i] = textLines[i] + r;
    result += textLines[i] + '\n';
  }
  return result;
}
