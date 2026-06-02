import React, { useEffect, useState, useRef } from 'react';

function SingleCounter({ target, label, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <div ref={elementRef} className="flex flex-col items-center p-6 text-center border-r border-white/10 last:border-0 md:border-r">
      <span className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange tracking-tight mb-2 select-none">
        {count}{suffix}
      </span>
      <span className="font-inter text-xs md:text-sm uppercase tracking-widest text-white/50 font-medium">
        {label}
      </span>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { target: 150, label: "Projects Completed", suffix: "+" },
    { target: 100, label: "Happy Clients", suffix: "+" },
    { target: 10, label: "Years Experience", suffix: "+" },
    { target: 25, label: "Expert Professionals", suffix: "+" }
  ];

  return (
    <section className="bg-black py-16 border-y border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <SingleCounter 
              key={idx} 
              target={stat.target} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
