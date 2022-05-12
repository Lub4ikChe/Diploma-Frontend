import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export const useDebounce = (callback: Function, delay: number): Function => {
  const timer = useRef<number | undefined>();

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
};
