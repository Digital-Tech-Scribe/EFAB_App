import { Link } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';

const collections = [
  {
    id: "estates",
    title: "Estates",
    description: "Master-planned residential communities across Nigeria designed for family-centric living.",
    image: "https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1794.jpg",
  },
  {
    id: "rentals",
    title: "Rentals",
    description: "Premium leased properties managed by EFAB with zero maintenance hassle.",
    image: "https://efabproperties.com/web/wp-content/uploads/2020/02/DJI_1753.jpg",
  },
  {
    id: "luxury",
    title: "Luxury Homes",
    description: "Exclusive detached villas and penthouses with cutting-edge architectural finishes.",
    image: "https://efabproperties.com/web/wp-content/uploads/2023/06/DJI_1884.jpg",
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "Retail and corporate spaces designed to foster business growth and community interaction.",
    image: "https://efabproperties.com/web/wp-content/uploads/2023/09/IMG_3043.jpg",
  }
];

export default function CollectionPage() {
  return (
    <div className="relative pt-40 pb-32 min-h-screen bg-cream z-10">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="font-mono text-[10px] uppercase tracking-[.4em] text-black/40 mb-6">Housing Hierarchy</div>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-sans tracking-tighter uppercase leading-[0.85]">
          Property <br /> Collection
        </h1>
        <p className="mt-8 font-sans text-xl md:text-2xl text-black/60 tracking-tight max-w-xl leading-relaxed">
          Our real estate products are defined by exceptional craftsmanship, sustainable community planning, and enduring value.
        </p>
      </div>

      <div className="w-full bg-cream border-t border-black/10">
        {collections.map((item, idx) => (
          <Link 
            key={item.id}
            to={`/projects?filter=${item.id}`}
            className="group flex flex-col md:flex-row items-center justify-between border-b border-black/10 relative overflow-hidden h-[18rem] md:h-[22rem] transition-colors cursor-pointer"
          >
            {/* Background Hover Video/Image Reveal */}
            <div className="absolute inset-0 z-0 bg-black/5 pointer-events-none origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out-expo">
               <img 
                 src={item.image} 
                 className="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale group-hover:grayscale-0 transition-all [transition-duration:2s]" 
                 alt={item.title} 
               />
               <div className="absolute inset-0 bg-cream/70 backdrop-blur-sm group-hover:bg-black/30 transition-colors duration-700"></div>
            </div>

            {/* Content Foreground */}
            <div className="container relative z-10 w-full mx-auto px-6 h-full flex flex-col md:flex-row justify-center md:items-center space-y-4 md:space-y-0 py-8">
              
              <div className="flex-1 md:w-1/3 text-left hidden md:block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-black/40 group-hover:text-white/60 transition-colors">
                  0{idx + 1}
                </span>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-sans text-5xl lg:text-[5rem] tracking-tighter uppercase text-black group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h2>
              </div>
              
              <div className="flex-1 md:w-1/3 flex items-center justify-start md:justify-end gap-6 opacity-0 group-hover:opacity-100 md:-translate-x-10 group-hover:translate-x-0 transition-all duration-700 ease-out-expo">
                 <p className="font-sans text-sm md:text-base text-white/50 tracking-tight max-w-[240px] hidden lg:block uppercase text-right leading-relaxed">
                   {item.description}
                 </p>
                 <span className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex flex-shrink-0 items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-700 group-hover:bg-white/10 backdrop-blur-lg">
                   <ArrowDownRight className="w-6 h-6 text-white" />
                 </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
