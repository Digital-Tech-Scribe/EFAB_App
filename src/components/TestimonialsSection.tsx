import { useState } from 'react';
import { cn } from './utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote: "Efab Properties delivered beyond our expectations. Their commitment to creating a sustainable and affordable community is unmatched in the region.",
      author: "Oluwaseun A.",
      role: "RESIDENT, COVILLEA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80"
    },
    {
      quote: "The attention to detail and structural integrity of their estates proves they are true innovators solving the housing needs of tomorrow.",
      author: "Ibrahim M.",
      role: "INVESTOR",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80"
    },
    {
      quote: "A family, a roof—they truly live by their slogan. We found our dream home with EFAB, and the process was seamless from start to finish.",
      author: "Chioma E.",
      role: "HOMEOWNER",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces&q=80"
    }
  ];

  const nextSlide = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="relative w-full bg-cream text-grey py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-24 gap-8">
        
        {/* Header & Controls */}
        <div className="md:col-span-14 md:col-start-6 flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32">
          
          <div>
            <h2 className="font-mono text-sm tracking-widest uppercase text-grey/80 flex items-center gap-2 mb-8 md:mb-0">
              <span className="inline-block w-2 h-2 rotate-45 bg-grey/80"></span>
              Client Stories
            </h2>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="font-mono text-base tracking-widest uppercase text-black/60">
              {String(current + 1).padStart(2, '0')} <span className="text-grey/50">/</span> {String(testimonials.length).padStart(2, '0')}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-grey/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                aria-label="Previous Slide"
                title="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-grey/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                aria-label="Next Slide"
                title="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
        </div>

        {/* Quote Content */}
        <div className="md:col-span-16 md:col-start-5 relative">
          
          {/* Giant Decorative Quote */}
          <div className="absolute -top-16 -left-8 md:-top-32 md:-left-16 text-[15rem] md:text-[25rem] font-sans leading-none text-grey/5 select-none pointer-events-none">
            "
          </div>
          
          <div className="relative z-10 min-h-[40vh] md:min-h-[30vh]">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out-cubic",
                  idx === current ? "opacity-100 pointer-events-auto z-10 relative" : "opacity-0 pointer-events-none z-0 absolute"
                )}
              >
                <h3 className="text-3xl md:text-5xl lg:text-[4rem] font-sans tracking-tight leading-[1.2] mb-12 max-w-5xl">
                  {testimonial.quote}
                </h3>
                
                <div className="flex items-center gap-6 mt-16">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-taupe grayscale">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-xl">{testimonial.author}</div>
                    <div className="font-mono text-sm uppercase tracking-wider text-black/60 mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}