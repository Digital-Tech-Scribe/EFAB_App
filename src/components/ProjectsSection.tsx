import { useState, useRef, useCallback } from 'react';
import { cn } from './utils';
import { useNavigate } from 'react-router-dom';
import { projects, ProjectTag } from '../data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';

type FilterKey = 'All' | ProjectTag;

const filters: FilterKey[] = ['All', 'Estates', 'Rentals', 'Abuja', 'Asaba', 'Awka', 'Port Harcourt'];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter as ProjectTag));

  // Group into sets of 3 for the carousel
  const slides: typeof projects[] = [];
  for (let i = 0; i < filtered.length; i += 3) {
    slides.push(filtered.slice(i, i + 3));
  }
  const totalSlides = slides.length;
  const currentGroup = slides[currentSlide] || [];

  // Pad to always show 3 cards (repeat from start if needed)
  while (currentGroup.length < 3 && filtered.length > 0) {
    currentGroup.push(filtered[currentGroup.length % filtered.length]);
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

  // Subtle scale on scroll for cinematic feel
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);

  return (
    <section
      ref={sectionRef}
      id="landmarks"
      className="relative w-full bg-cream py-24 md:py-32 overflow-hidden border-t border-black/5"
    >
      <div className="container mx-auto px-6">

        {/* ── Section Header ── */}
        <div className="mb-10 md:mb-14 flex flex-col items-start">
          <div className="font-mono text-lg md:text-xl uppercase tracking-[.25em] text-black/90 font-bold mb-4">Our Work</div>
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl tracking-tighter text-black uppercase leading-[0.85]">
            Featured <br /> Projects
          </h2>
          <div className="mt-6 font-sans text-2xl md:text-3xl text-black/90 font-medium tracking-tight max-w-xl">
            We collaborate with qualified professionals for project identification, development, design, evaluation, and delivery.
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setCurrentSlide(0); }}
              className={cn(
                "font-mono text-sm md:text-base uppercase tracking-[.2em] font-bold px-6 py-3 rounded-full transition-all duration-300 border",
                activeFilter === filter
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-black/60 border-black/20 hover:border-black hover:text-black"
              )}
            >
              {filter === 'Port Harcourt' ? '📍 Port Harcourt' :
               filter === 'Abuja' ? '📍 Abuja' :
               filter === 'Asaba' ? '📍 Asaba' :
               filter === 'Awka' ? '📍 Awka' : filter}
            </button>
          ))}
        </div>

        {/* ── Parallax Carousel ── */}
        <motion.div style={{ scale }} className="relative">
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-end min-h-[60vh]">

            {/* LEFT COLUMN — smaller, offset higher */}
            {currentGroup[0] && (
              <motion.div
                key={`left-${currentSlide}-${currentGroup[0].id}`}
                style={{ y: leftY }}
                className="col-span-12 md:col-span-3 self-start"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="group relative cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/projects/${currentGroup[0].id}`)}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                      src={currentGroup[0].imageUrl}
                      alt={currentGroup[0].title}
                      className="w-full h-full object-cover transition-transform [transition-duration:1.5s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700" />
                  </div>
                  <div className="pt-4 space-y-1">
                    <div className="flex flex-wrap gap-2">
                      {currentGroup[0].tags.map(tag => (
                        <span key={tag} className="font-mono text-xs md:text-sm uppercase tracking-wider text-black/50 font-bold">
                          • {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-sans text-xl md:text-2xl uppercase tracking-tighter group-hover:opacity-60 transition-opacity">
                      {currentGroup[0].title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CENTER COLUMN — tallest, most prominent */}
            {currentGroup[1] && (
              <motion.div
                key={`center-${currentSlide}-${currentGroup[1].id}`}
                style={{ y: centerY }}
                className="col-span-12 md:col-span-5 self-end"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <div
                  className="group relative cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/projects/${currentGroup[1].id}`)}
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <img
                      src={currentGroup[1].imageUrl}
                      alt={currentGroup[1].title}
                      className="w-full h-full object-cover transition-transform [transition-duration:1.5s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700" />
                  </div>
                  <div className="pt-5 space-y-1">
                    <div className="flex flex-wrap gap-2">
                      {currentGroup[1].tags.map(tag => (
                        <span key={tag} className="font-mono text-xs md:text-sm uppercase tracking-wider text-black/50 font-bold">
                          • {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-sans text-2xl md:text-3xl uppercase tracking-tighter group-hover:opacity-60 transition-opacity">
                      {currentGroup[1].title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            )}

            {/* RIGHT COLUMN — bleeds off right edge */}
            {currentGroup[2] && (
              <motion.div
                key={`right-${currentSlide}-${currentGroup[2].id}`}
                style={{ y: rightY }}
                className="col-span-12 md:col-span-4 self-center md:translate-x-[15%]"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <div
                  className="group relative cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/projects/${currentGroup[2].id}`)}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                      src={currentGroup[2].imageUrl}
                      alt={currentGroup[2].title}
                      className="w-full h-full object-cover transition-transform [transition-duration:1.5s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700" />
                  </div>
                  <div className="pt-4 space-y-1">
                    <div className="flex flex-wrap gap-2">
                      {currentGroup[2].tags.map(tag => (
                        <span key={tag} className="font-mono text-xs md:text-sm uppercase tracking-wider text-black/50 font-bold">
                          • {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-sans text-xl md:text-2xl uppercase tracking-tighter group-hover:opacity-60 transition-opacity">
                      {currentGroup[2].title}
                    </h3>
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
                aria-label="Previous projects"
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
                aria-label="Next projects"
              >
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* View All CTA */}
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-4 px-10 py-4 border border-black text-black font-mono text-sm md:text-base tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500"
            >
              <span>View All Projects</span>
              <span className="text-base leading-none">↳</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
