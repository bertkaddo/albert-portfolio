"use client";
import { useEffect, useState } from "react";

interface SimpleTypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

/** Types the text once on mount, then leaves it in place. */
export const SimpleTypewriter: React.FC<SimpleTypewriterProps> = ({
  text,
  speed = 100,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
    setIsComplete(true);
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <span className="animate-pulse text-[#1F5C93]" aria-hidden="true">
          |
        </span>
      )}
    </span>
  );
};
