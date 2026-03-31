import { useEffect, useRef, useState } from 'react';

// Simple counter component
function Counter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  // Format large numbers with commas
  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return (
    <span ref={nodeRef} className="tabular-nums">
      {formattedCount}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { value: 4700, suffix: "+", label: "Houses Delivered" },
    { value: 20, suffix: "+", label: "Estates Developed" },
    { value: 26, suffix: "+", label: "Years of Excellence" }
  ];

  return (
    <section className="relative w-full bg-cream text-grey py-16 md:py-32 border-t border-grey/10 overflow-hidden">
      {/* Subtle Background Aerial */}
      <div
        className="absolute inset-0 opacity-10 grayscale pointer-events-none mix-blend-multiply scale-110 bg-[url('https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1758.jpg')] bg-cover bg-center"
      ></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="font-mono text-base md:text-lg font-bold tracking-widest uppercase text-black/70 mb-6 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-black/70 rotate-45"></span>
                {stat.label}
              </div>
              <div className="text-6xl md:text-7xl lg:text-[7rem] font-sans tracking-tight leading-none text-black">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}