
const expertise = [
  {
    number: "01",
    title: "Urban Planning",
    description: "Creating master-planned communities that integrate social, environmental, and architectural harmony.",
    tag: "F-URBAN"
  },
  {
    number: "02",
    title: "Architecture",
    description: "Designing iconic residential and commercial structures with a focus on longevity and aesthetic precision.",
    tag: "F-ARCH"
  },
  {
    number: "03",
    title: "Development",
    description: "END-TO-END project management from land acquisition to final delivery of premium living spaces.",
    tag: "F-DEV"
  },
  {
    number: "04",
    title: "Estate Mgt",
    description: "Maintaining the value and integrity of our communities through professional facility management.",
    tag: "F-ESTATE"
  }
];

export default function ServicesSection() {
  return (
    <section id="expertise" className="relative w-full bg-cream py-24 md:py-32 overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32 flex flex-col items-start">
          <div className="font-mono text-sm md:text-base uppercase tracking-[.3em] text-black/80 font-bold mb-6">Execution</div>
          <h2 className="font-sans text-5xl md:text-8xl lg:text-9xl tracking-tighter text-black uppercase leading-[0.85]">
            Our <br/> Expertise
          </h2>
        </div>

        {/* Expertise Grid with Numbers and Vertical Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {expertise.map((item) => (
            <div 
              key={item.number} 
              className="bg-cream p-10 md:p-12 space-y-12 min-h-[450px] relative transition-colors hover:bg-white group"
            >
              {/* Vertical Tag */}
              <div className="absolute right-6 top-10 font-mono text-base md:text-lg uppercase tracking-[0.2em] text-black/60 font-medium origin-top-right rotate-90 whitespace-nowrap">
                {item.tag}
              </div>

              {/* Number Index */}
              <div className="font-sans text-6xl md:text-7xl lg:text-8xl leading-none font-bold text-black/5 tracking-tighter group-hover:text-black/10 transition-colors">
                {item.number}
              </div>

              <div className="space-y-6 pt-12">
                <h3 className="font-sans text-2xl md:text-3xl uppercase tracking-tight text-black">
                  {item.title}
                </h3>
                 <p className="font-sans text-xl md:text-2xl text-black/80 font-medium leading-relaxed max-w-[240px]">
                   {item.description}
                 </p>
              </div>

              <div className="pt-8">
                <div className="w-12 h-px bg-black/20 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}