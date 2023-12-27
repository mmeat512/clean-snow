import { useEffect, useRef } from 'react';
import './App.css';
import useComponentSize from './hooks/useComponentSize';
import SnowClass from './components/SnowClass';

function App() {
  const [componentRef, size] = useComponentSize();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const requestAnimationRef = useRef(null);
  const snow = new SnowClass(canvasRef);

  const animate = () => {
    snow.move();
    snow.draw();
    requestAnimationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    snow.init();
  });

  useEffect(() => {
    requestAnimationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    };
  }, [requestAnimationRef.current]);

  return (
    <div className="window" ref={componentRef}>
      <canvas width={size.width} height={size.height} ref={canvasRef} />
    </div>
  );
}

export default App;
