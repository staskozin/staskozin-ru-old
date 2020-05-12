import React, { useState } from 'react';

import './Transliterator.scss';

export default function Transliterator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <>
      <h1>Транслитератор</h1>
      <div className="transliterator">
        <div>
          <h2 className="things-label">Исходный текст</h2>
          <textarea
            className="things-textarea"
            cols="30" rows="15"
            placeholder="Бензиновые газонокосилки"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setOutput(transliterate(e.target.value))
            }}
          />
        </div>
        <div>
          <h2 className="things-label">Результат</h2>
          <textarea
            className="things-textarea"
            cols="30" rows="15"
            placeholder="benzinovye-gazonokosilki"
            value={output}
            onChange={(e) => setOutput(transliterate(e.target.value))}
          />
        </div>
      </div>
    </>
  )
}

function transliterate(text) {
  var letterPairs = {
    'а': 'a', 'б': 'b', 'в': 'v',
    'г': 'g', 'д': 'd', 'е': 'e',
    'ё': 'e', 'ж': 'zh', 'з': 'z',
    'и': 'i', 'й': 'y', 'к': 'k',
    'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r',
    'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts',
    'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
    'ъ': '', 'ы': 'y', 'ь': '',
    'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'a', 'Б': 'b', 'В': 'v',
    'Г': 'g', 'Д': 'd', 'Е': 'e',
    'Ё': 'e', 'Ж': 'zh', 'З': 'z',
    'И': 'i', 'Й': 'y', 'К': 'k',
    'Л': 'l', 'М': 'm', 'Н': 'n',
    'О': 'o', 'П': 'p', 'Р': 'r',
    'С': 's', 'Т': 't', 'У': 'u',
    'Ф': 'f', 'Х': 'h', 'Ц': 'ts',
    'Ч': 'ch', 'Ш': 'sh', 'Щ': 'sch',
    'Ь': '', 'Ы': 'y', 'Ъ': '',
    'Э': 'e', 'Ю': 'yu', 'Я': 'ya',
    ',': '', '.': '', '(': '-',
    ')': '-', ' ': '-', '"': '',
    '\'': '', '—': '-', '«': '',
    '»': '', '*': 'x', '/': '',
    '\\': '', '№': 'n', '#': 'n',
    '–': '-', '×': '-', '_': '-',
    '&': '', '?': '', '+': ''
  };

  var output = '';
  for (var i = 0; i < text.length; i++) {
    if (letterPairs[text.charAt(i)] != undefined) {
      output += letterPairs[text.charAt(i)];
    }
    else {
      output += text.charAt(i);
    }
  }
  output = output.toLowerCase();
  return removeSymbols(output);
}

function removeSymbols(string) {
  // Функция, удаляющая лишние '-' и 'y'
  for (var i = 1; i < string.length; i++) {
    if (string.charAt(i - 1) == '-' && string.charAt(i) == '-' ||
      string.charAt(i - 1) == 'y' && string.charAt(i) == 'y') {
      var tmp = string.substr(i + 1);
      string = string.substring(0, i);
      string += tmp;
      string = removeSymbols(string);
    }
  }
  while (string.charAt(string.length - 1) == '-') {
    string = string.substring(0, string.length - 1);
  }
  while (string.charAt(0) == '-') {
    string = string.substring(1);
  }
  return string;
}
