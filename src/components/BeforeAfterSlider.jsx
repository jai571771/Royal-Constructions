import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const beforeImage = "/assets/images/renovation_before.png";
  const afterImage = "/assets/images/renovation_after.png";

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="section-padding bg-lightgray">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-uppercase mx-auto text-center">Real Transformations</span>
          <h2 className="text-h2 text-center">
            Before & After Showcase
          </h2>
          <p className="text-body mx-auto text-center text-black/60">
            Drag the center slider left and right to inspect the quality of our craftsmanship and modern remodeling details.
          </p>
        </div>

        {/* Slider Box */}
        <div 
          ref={containerRef}
          className="relative max-w-4xl mx-auto h-[350px] md:h-[500px] rounded-[24px] overflow-hidden shadow-premium select-none cursor-ew-resize border border-lightgray-border"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* AFTER IMAGE (Background - Shows when sliding right) */}
          <div className="absolute inset-0">
            <img 
              src={afterImage} 
              alt="After Renovation" 
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Badges */}
            <span className="absolute bottom-6 right-6 bg-orange text-white font-inter text-xs font-bold px-4 py-2 rounded-button uppercase tracking-wider shadow-glow">
              After (Renovated)
            </span>
          </div>

          {/* BEFORE IMAGE (Foreground - Clipped width) */}
          <div 
            className="absolute inset-0 z-10 overflow-hidden transition-all duration-75"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={beforeImage} 
              alt="Before Renovation" 
              className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
              style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
            />
            {/* Badges */}
            <span className="absolute bottom-6 left-6 bg-black text-white font-inter text-xs font-bold px-4 py-2 rounded-button uppercase tracking-wider">
              Before
            </span>
          </div>

          {/* DRAGGER BAR */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white z-20 transition-all duration-75 cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Circular Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-orange border-4 border-white text-white rounded-full flex items-center justify-center shadow-glow">
              <div className="flex gap-0.5 items-center">
                <span className="text-[10px]">◀</span>
                <span className="text-[10px]">▶</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-black/50 mt-6 font-inter">
          <HelpCircle className="w-4 h-4 text-orange" />
          <span>Click and drag the orange handler sideways. Works on touchscreens.</span>
        </div>
      </div>
    </section>
  );
}
