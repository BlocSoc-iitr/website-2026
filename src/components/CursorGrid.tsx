import { useEffect, useRef } from 'react';

const CursorGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let mouseX = -100;
    let mouseY = -100;
    const cellSize = 40;
    const highlightRadius = 150;

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };
    window.addEventListener('mousemove', handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scrollY = window.scrollY;
      const adjustedMouseY = mouseY - scrollY;

      const cols = Math.ceil(canvas.width / cellSize);
      const rows = Math.ceil(canvas.height / cellSize);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * cellSize;
          const y = j * cellSize;
          const dist = Math.sqrt((x - mouseX) ** 2 + (y - adjustedMouseY) ** 2);

          if (dist < highlightRadius) {
            const intensity = 1 - dist / highlightRadius;
            ctx.beginPath();
            ctx.arc(x, y, 1.5 + intensity * 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(142, 70%, 45%, ${intensity * 0.6})`;
            ctx.fill();
          }
        }
      }

      requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorGrid;
