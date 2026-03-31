import { galleryImages } from '../data/projects';

export default function GalleryPage() {
  return (
    <div className="relative pt-40 pb-32 min-h-screen bg-cream z-10 px-6">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="font-mono text-[10px] uppercase tracking-[.4em] text-black/40 mb-6">Visual Media</div>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-sans tracking-tighter uppercase leading-[0.85]">
          Project <br /> Gallery
        </h1>
        <p className="mt-8 font-sans text-xl md:text-2xl text-black/60 tracking-tight max-w-xl">
          A glimpse into the diverse portfolio of estates, luxury homes, and architectural endeavors we have brought to life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className="group relative break-inside-avoid overflow-hidden cursor-pointer bg-black/5"
            >
              <img 
                src={image} 
                alt={`EFAB Properties drone asset ${idx + 1}`} 
                className="w-full h-auto object-cover grayscale opacity-90 transition-all duration-700 ease-out-expo group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white/50 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-3xl font-light transform scale-150 relative top-px">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
