import { useState, useEffect, useRef } from 'react';

const useCountdown = (initialCount: number, onCountdownComplete: () => void) => {
  const [countdown, setCountdown] = useState<number>(3);
  const timerRef = useRef<number | null>(null);

  const [isCounted, setIsCounted] = useState<boolean>(false);

  useEffect(() => {
    if (isCounted) {
      if (countdown > 0) {
        timerRef.current = window.setInterval(() => {
          setCountdown(prevCount => {
            if (prevCount <= 1) {
              clearInterval(timerRef.current!);
              onCountdownComplete();
              return 0;
            }
            return prevCount - 1;
          });
        }, 1000);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isCounted]);

  const startCountdown = () => {
    setIsCounted(true);
    setCountdown(initialCount);
  };

  const stopCountdown = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setIsCounted(false);
    }
  };

  return { countdown, startCountdown, stopCountdown };
};

export default useCountdown;
