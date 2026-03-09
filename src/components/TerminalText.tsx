import { useEffect, useState } from 'react';

interface TerminalTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

const TerminalText = ({ text, speed = 40, delay = 0, className = '', showCursor = true }: TerminalTextProps) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, started, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && displayed.length < text.length && (
        <span className="animate-blink text-primary">█</span>
      )}
      {showCursor && displayed.length >= text.length && (
        <span className="animate-blink text-primary">█</span>
      )}
    </span>
  );
};

export default TerminalText;
