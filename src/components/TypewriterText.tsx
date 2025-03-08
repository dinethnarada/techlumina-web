'use client';

import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 100,
  className = "",
  onComplete
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className={`${className} inline-block`}>
      {currentText}
      <span className="animate-blink border-r-2 border-light-gray ml-1">&nbsp;</span>
    </span>
  );
};

export default TypewriterText;
