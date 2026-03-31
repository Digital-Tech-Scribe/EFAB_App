
export default function LocationSection() {
  return (
    <section className="relative w-full py-32 bg-grey text-white">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-24 gap-8">
        
        <div className="md:col-span-8 md:col-start-3 flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-sans mb-6 tracking-tight">Visit Our Office</h2>
          <p className="text-xl md:text-2xl text-taupe mb-12">
            A place where vision meets community.
          </p>
          
          <div className="text-lg font-sans mb-12 max-w-sm">
            23 Lord Lugard St, Asokoro 900247, Abuja, Federal Capital Territory, Nigeria.
          </div>
          
          <a href="#contact" className="inline-flex items-center w-fit px-8 py-4 bg-white text-black font-mono text-sm tracking-uppercase uppercase rounded-full hover:bg-cream transition-colors">
            Visit us <span className="ml-2">→</span>
          </a>
        </div>
        
        <div className="md:col-span-12 md:col-start-12 h-[60vh] bg-black rounded-lg overflow-hidden">
          {/* Placeholder for map or office image */}
          <div className="w-full h-full flex items-center justify-center text-taupe opacity-50">
            [Map Visual Here]
          </div>
        </div>
        
      </div>
    </section>
  );
}
