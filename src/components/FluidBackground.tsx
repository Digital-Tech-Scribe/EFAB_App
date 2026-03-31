import { useEffect, useRef } from 'react';
import { 
  BLOB_COUNT,
  BLOB_INITIAL_X_RATIO_1, 
  BLOB_INITIAL_Y_RATIO_1, 
  BLOB_RADIUS_RATIO_1,
  BLOB_INITIAL_X_RATIO_2,
  BLOB_INITIAL_Y_RATIO_2,
  BLOB_RADIUS_RATIO_2,
  BLOB_COLOR_1,
  BLOB_COLOR_2,
  FPS_LIMIT
} from '../constants/animation';

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Extremely subtle fluid glass background
    // We only use 2 blobs, very slow moving, very low opacity
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // The blobs
    const blobs = [
      { x: canvas.width * BLOB_INITIAL_X_RATIO_1, y: canvas.height * BLOB_INITIAL_Y_RATIO_1, radius: canvas.width * BLOB_RADIUS_RATIO_1, vx: 0.2, vy: 0.1, color: BLOB_COLOR_1 },
      { x: canvas.width * BLOB_INITIAL_X_RATIO_2, y: canvas.height * BLOB_INITIAL_Y_RATIO_2, radius: canvas.width * BLOB_RADIUS_RATIO_2, vx: -0.1, vy: -0.2, color: BLOB_COLOR_2 }
    ];
    
    let lastRenderTime = 0;
    const FRAME_DURATION = 1000 / FPS_LIMIT;
    
    const animate = (timestamp: number) => {
      // Throttle to max FPS
      if (timestamp - lastRenderTime < FRAME_DURATION) {
        animationFrameIdRef.current = window.requestAnimationFrame(animate);
        return;
      }
      
      lastRenderTime = timestamp;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      blobs.forEach(blob => {
        blob.x += blob.vx;
        blob.y += blob.vy;
        
        // Bounce off walls extremely slowly
        if (blob.x - blob.radius > canvas.width || blob.x + blob.radius < 0) blob.vx *= -1;
        if (blob.y - blob.radius > canvas.height || blob.y + blob.radius < 0) blob.vy *= -1;
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameIdRef.current = window.requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameIdRef.current = window.requestAnimationFrame(animate);
    
    // Handle visibility changes to pause when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause animation when tab is not visible
        window.cancelAnimationFrame(animationFrameIdRef.current);
      } else {
        // Resume animation when tab becomes visible
        lastRenderTime = performance.now(); // Reset timer to prevent jump
        animationFrameIdRef.current = window.requestAnimationFrame(animate);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameIdRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none w-full h-full mix-blend-screen blur-[100px]"
    />
  );
}