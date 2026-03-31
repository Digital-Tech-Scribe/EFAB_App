export default function AboutSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden">
      {/* Zone A - Dark Theme */}
      <div className="relative w-full bg-black text-white py-32 md:py-48">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://efabproperties.com/web/wp-content/uploads/2020/02/bg_home_black-2-1.png')]"
        ></div>
        <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-24 gap-8">
          
          {/* Section Label */}
          <div className="md:col-span-4 md:col-start-2">
            <h2 className="font-mono text-base md:text-lg font-bold tracking-widest uppercase text-taupe mb-8 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-taupe rotate-45"></span>
              The Vision
            </h2>
          </div>
          
          {/* Main Copy */}
          <div className="md:col-span-12 md:col-start-6">
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-sans tracking-tight leading-[1.05] text-white selection:bg-white selection:text-black">
              Architecting the future of African urban living.
            </h3>
          </div>

          <div className="md:col-span-6 md:col-start-19 text-taupe font-sans text-xl md:text-2xl leading-relaxed mt-12 md:mt-0">
            Founder Chief (Dr.) Fabian Nwaora (OON) established Efab with a singular goal: to redefine what it means to come home. Today, we are one of Nigeria’s leading force in regional urban development.
          </div>
        </div>
      </div>

      {/* Zone B - Light Theme */}
      <div className="w-full bg-cream text-grey py-32 md:py-48 flex items-center">
        <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-24 gap-8">
          
          <div className="md:col-span-4 md:col-start-2">
            <h2 className="font-mono text-base md:text-lg font-bold tracking-widest uppercase text-grey flex items-center gap-2 mb-8">
              <span className="inline-block w-2 h-2 rotate-45 bg-grey"></span>
              The Mission
            </h2>
          </div>

          <div className="md:col-span-16 md:col-start-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-tight leading-relaxed text-grey">
              "A family, a roof" — more than a slogan, it's our blueprint for every square meter we develop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}