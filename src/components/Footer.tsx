import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants/contactInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white px-8 pt-20 pb-12 flex flex-col justify-between h-[100vh]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* EFAB Logo + Tagline */}
        <div className="md:col-span-4 space-y-6">
          <Link to="/">
            <img 
              src="https://efabproperties.com/web/wp-content/uploads/2023/09/logo_efab.png" 
              alt="EFAB Properties" 
              className="h-10 w-auto brightness-200"
            />
          </Link>
           <p className="font-sans text-white/95 text-xl font-medium leading-relaxed max-w-sm md:max-w-md uppercase tracking-tight">
             A family, a roof. Building landmark communities across Nigeria.
           </p>
        </div>

         {/* Column 1: FOLLOW */}
         <div className="md:col-span-2 space-y-6">
           <div className="font-mono text-base font-bold uppercase tracking-[.25em] text-white">Follow</div>
           <ul className="flex flex-col gap-4">
             <li><a href="https://facebook.com/efabproperties" target="_blank" rel="noopener noreferrer" className="font-sans text-2xl md:text-3xl font-medium hover:text-white transition-all duration-500 tracking-tight uppercase text-white/90">Facebook</a></li>
             <li><a href="https://youtube.com/@EfabProperties" target="_blank" rel="noopener noreferrer" className="font-sans text-2xl md:text-3xl font-medium hover:text-white transition-all duration-500 tracking-tight uppercase text-white/90">YouTube</a></li>
             <li><a href="https://x.com/efabproperties" target="_blank" rel="noopener noreferrer" className="font-sans text-2xl md:text-3xl font-medium hover:text-white transition-all duration-500 tracking-tight uppercase text-white/90">X (Twitter)</a></li>
           </ul>
         </div>

         {/* Column 2: CONTACT */}
         <div className="md:col-span-3 space-y-6">
           <div className="font-mono text-base font-bold uppercase tracking-[.25em] text-white">Contact</div>
           <div className="space-y-3">
             <a href={`mailto:${CONTACT_INFO.email}`} className="block font-sans text-2xl md:text-3xl font-medium hover:text-white transition-all duration-500 tracking-tight uppercase text-white/90 break-all w-full">
               {CONTACT_INFO.email}
             </a>
             <div className="font-sans text-2xl md:text-3xl font-medium tracking-tight uppercase text-white/90 break-all">{CONTACT_INFO.phone}</div>
           </div>
           <div className="pt-4 space-y-3">
             <div className="font-mono text-base font-bold uppercase tracking-widest text-white">Showroom</div>
             <p className="font-sans text-xl font-medium text-white/90 leading-relaxed uppercase tracking-tight">
               {CONTACT_INFO.address}
             </p>
           </div>
         </div>

         {/* Column 3: NAVIGATE */}
         <div className="md:col-span-3 space-y-6">
           <div className="font-mono text-base font-bold uppercase tracking-[.25em] text-white">Navigate</div>
           <ul className="flex flex-col gap-4">
             <li><Link to="/about" className="font-sans text-2xl md:text-3xl font-medium hover:text-white transition-all duration-500 tracking-tight uppercase text-white/90">About</Link></li>
             <li><Link to="/projects" className="font-sans text-2xl md:text-3xl font-medium hover:text-white transition-all duration-500 tracking-tight uppercase text-white/90">Projects</Link></li>
             <li><Link to="/gallery" className="font-sans text-2xl md:text-3xl font-medium hover:text-white transition-all duration-500 tracking-tight uppercase text-white/90">Gallery</Link></li>
             <li><Link to="/contact" className="font-sans text-2xl md:text-3xl font-medium hover:text-white transition-all duration-500 tracking-tight uppercase text-white/90">Contact</Link></li>
           </ul>
         </div>
      </div>

      {/* Massive Typographic Brandmark */}
      <div className="mt-auto pt-16">
        <h2 className="w-full text-center text-[10.5vw] leading-[0.8] font-bold tracking-tighter text-white uppercase select-none pointer-events-none whitespace-nowrap">
          EFAB Properties
        </h2>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-6 gap-4">
          <div className="font-mono text-sm md:text-base font-bold uppercase tracking-[.25em] text-white/80">
            &copy; {currentYear} EFAB PROPERTIES. A FAMILY, A ROOF.
          </div>
          <div className="flex gap-6 md:gap-8 font-mono text-sm md:text-base font-bold uppercase tracking-[.25em] text-white/80">
            <span>ABUJA</span>
            <span>ASABA</span>
            <span>PORT HARCOURT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}