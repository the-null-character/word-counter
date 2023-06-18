import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = (text) => {
    if (text.trim() === '') {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your text here..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <p>Word Count: {getWordCount(text)}</p>
    </div>
  );
};

export default WordCounter;
