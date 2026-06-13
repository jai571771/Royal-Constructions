import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
  }
};

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
    <div ref={elementRef} className="flex flex-col items-center p-6 text-center border-b border-white/10 md:border-b-0 md:border-r border-white/10 last:border-0">
      <span className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange tracking-tight mb-3 select-none">
        {count}{suffix}
      </span>
      <span className="font-inter text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/55 font-semibold">
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
    <section className="bg-black py-20 md:py-24 border-y border-white/10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="container-custom"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <SingleCounter 
              key={idx} 
              target={stat.target} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
