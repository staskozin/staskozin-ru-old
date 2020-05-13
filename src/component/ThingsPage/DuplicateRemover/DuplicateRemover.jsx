import React, { useState } from 'react';

export default function DuplicateRemover() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <>
      <h1>Уничтожитель дубликатов</h1>
      <div className="transliterator">
        <div>
          <h2 className="things-label">Исходный текст</h2>
          <textarea
            className="things-textarea"
            cols="30" rows="15"
            placeholder="120 см                                                                                                                                                                                                                 150 см                                                                                                                                                                                                                 120 см"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setOutput(removeDuplicates(e.target.value))
            }}
          />
        </div>
        <div>
          <h2 className="things-label">Результат</h2>
          <textarea
            className="things-textarea"
            cols="30" rows="15"
            placeholder="120 см                                                                                                                                                                                                                 150 см"
            value={output}
            onChange={(e) => setOutput(removeDuplicates(e.target.value))}
          />
        </div>
      </div>
    </>
  )
}

function removeDuplicates(text) {
  const lines = text.split(/\r?\n/);
  const output = [];
  lines.forEach(function (item) {
    if (output.indexOf(item) == -1) {
      output.push(item);
    }
  });
  return output.join('\n');
}
