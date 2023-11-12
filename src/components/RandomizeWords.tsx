import React, { useState } from 'react';

const RandomizeWords = ({ sourceWord }: { sourceWord: string }) => {
  const [isAnimating, setAnimating] = useState(false);

  const handleRandomizeWords = (e: any) => {
    if (isAnimating) {
      return; 
    }

    setAnimating(true);

    let word: string = sourceWord;

    let iterations = 0;
    const interval = setInterval(() => {
      e.target.innerText = word
        .split("")
        .map((item, index) => {
          if (index < iterations) {
            return word[index];
          }

          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");

      if (iterations >= word.length) {
        clearInterval(interval);
        setAnimating(false); 
      }

      iterations += 1 / 3;
    }, 20);
  };

  return (
    <span
      className="roboto-mono"
      onMouseOver={handleRandomizeWords}
      onClick={handleRandomizeWords}
    >
      {sourceWord}
    </span>
  );
};

export default RandomizeWords;
