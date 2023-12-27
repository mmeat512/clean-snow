import { useEffect, useRef, useState } from 'react';

interface ComponentSize {
  width: number;
  height: number;
}

const initialState = { width: innerWidth, height: innerHeight };

function useComponentSize(): [React.RefObject<HTMLDivElement>, ComponentSize] {
  const [size, setSize] = useState<ComponentSize>(initialState);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } =
        componentRef.current?.getBoundingClientRect() ?? initialState;
      setSize({ width, height });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [componentRef, size];
}

export default useComponentSize;
