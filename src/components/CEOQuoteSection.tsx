
export default function CEOQuoteSection() {
  return (
    <section id="ceo-quote" className="relative w-full border-t border-black/5">
      <div className="flex flex-col md:flex-row min-h-[70vh] md:h-[75vh]">
        
        {/* Left: Drone Image */}
        <div className="relative w-full md:w-1/2 h-[45vh] md:h-full overflow-hidden">
          <img
            src="https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1884.jpg"
            alt="EFAB Estate aerial view"
            className="w-full h-full object-cover"
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
        </div>

        {/* Right: Quote Panel */}
        <div className="relative w-full md:w-1/2 bg-black flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16">
          {/* Five-star rating */}
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-400 text-xl">★</span>
            ))}
          </div>

           {/* Quote */}
           <blockquote className="font-sans text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight font-medium uppercase mb-10">
             "I am more than ever committed to{' '}
             <span className="text-amber-400">investing in our communities and the citizens.</span>{' '}
             My motivation is to see that, my sheer hard work provides affordable housing for all."
           </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-6 mt-auto">
            <div className="w-16 h-16 rounded-full bg-white/20 border border-white/50 flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="font-mono text-xl font-bold uppercase tracking-widest text-white">FN</span>
            </div>
            <div>
              <p className="font-sans text-white text-xl md:text-3xl tracking-wider uppercase font-black drop-shadow-md">
                Chief (Dr.) Fabian O. Nwaora
              </p>
              <p className="font-mono text-base md:text-lg tracking-wider uppercase text-white mt-2 font-bold drop-shadow-sm">
                OON — Founder & Chairman, EFAB Properties
              </p>
            </div>
          </div>

          {/* Decorative background text */}
          <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
            <span className="text-[12vw] md:text-[8vw] font-bold text-white/[0.03] uppercase tracking-tighter leading-none">
              EFAB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
