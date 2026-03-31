import { useRef, useState, useCallback } from 'react';
import { galleryImages } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GallerySliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Group gallery images into sets of 3
  const slides: string[][] = [];
  for (let i = 0; i < galleryImages.length; i += 3) {
    slides.push(galleryImages.slice(i, i + 3));
  }
  const totalSlides = slides.length;
  const currentGroup = [...(slides[currentSlide] || [])];

  // Pad to always show 3 images
  while (currentGroup.length < 3 && galleryImages.length > 0) {
    currentGroup.push(galleryImages[currentGroup.length % galleryImages.length]);
  }

  const goNext = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Scroll-driven parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Different parallax speeds for each column
  const leftY = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const centerY = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const rightY = useTransform(scrollYProgress, [0, 1], [100, -140]);

  // Subtle scale on scroll
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative w-full bg-cream py-24 md:py-32 border-t border-black/5 overflow-hidden"
    >
      <div className="container mx-auto px-6">

        {/* ── Header ── */}
        <div className="mb-14 md:mb-20 flex flex-col items-start">
          <div className="font-mono text-lg md:text-xl uppercase tracking-[.25em] text-black/90 font-bold mb-4">Visual Archive</div>
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl tracking-tighter text-black uppercase leading-[0.85]">
            Gallery
          </h2>
          <p className="mt-6 font-sans text-2xl md:text-3xl text-black/90 font-medium tracking-tight">
            View the photos of our projects across Nigeria.
          </p>
        </div>

        {/* ── Parallax Staggered Layout ── */}
        <motion.div style={{ scale }} className="relative">
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-end min-h-[55vh]">

            {/* LEFT COLUMN — smaller, offset higher */}
            {currentGroup[0] && (
              <motion.div
                key={`gal-left-${currentSlide}-0`}
                style={{ y: leftY }}
                className="col-span-12 md:col-span-3 self-start"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group relative cursor-pointer overflow-hidden">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                      src={currentGroup[0]}
                      alt={`Gallery ${currentSlide * 3 + 1}`}
                      className="w-full h-full object-cover transition-transform [transition-duration:1.5s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* CENTER COLUMN — tallest, most prominent */}
            {currentGroup[1] && (
              <motion.div
                key={`gal-center-${currentSlide}-1`}
                style={{ y: centerY }}
                className="col-span-12 md:col-span-5 self-end"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <div className="group relative cursor-pointer overflow-hidden">
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <img
                      src={currentGroup[1]}
                      alt={`Gallery ${currentSlide * 3 + 2}`}
                      className="w-full h-full object-cover transition-transform [transition-duration:1.5s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* RIGHT COLUMN — bleeds off right edge */}
            {currentGroup[2] && (
              <motion.div
                key={`gal-right-${currentSlide}-2`}
                style={{ y: rightY }}
                className="col-span-12 md:col-span-4 self-center md:translate-x-[15%]"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <div className="group relative cursor-pointer overflow-hidden">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                      src={currentGroup[2]}
                      alt={`Gallery ${currentSlide * 3 + 3}`}
                      className="w-full h-full object-cover transition-transform [transition-duration:1.5s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* ── Navigation Bar ── */}
          <div className="mt-14 flex items-center justify-between">
            {/* Counter + Arrows */}
            <div className="flex items-center gap-8">
              {/* Prev */}
              <button
                onClick={goPrev}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
                aria-label="Previous gallery images"
              >
                <svg className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Counter */}
              <div className="font-mono text-sm md:text-base tracking-[.2em] text-black/70 font-bold tabular-nums">
                {String(currentSlide + 1).padStart(2, '0')} <span className="text-black/30 mx-1">/</span> {String(totalSlides).padStart(2, '0')}
              </div>

              {/* Next */}
              <button
                onClick={goNext}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
                aria-label="Next gallery images"
              >
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* View Full Gallery CTA */}
            <button
              onClick={() => navigate('/gallery')}
              className="inline-flex items-center gap-4 px-10 py-4 border border-black text-black font-mono text-sm md:text-base tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500"
            >
              <span>View Full Gallery</span>
              <span className="text-base leading-none">↳</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
