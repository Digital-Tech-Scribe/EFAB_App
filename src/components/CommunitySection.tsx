import { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { INITIAL_WIDTH, FINAL_WIDTH, INITIAL_HEIGHT, FINAL_HEIGHT, INITIAL_BORDER_RADIUS, FINAL_BORDER_RADIUS, INITIAL_TEXT_Y, FINAL_TEXT_Y } from '../constants/animation';

const features = [
  {
    icon: '🏠',
    title: 'Aesthetic',
    description: 'All our housing have an amazing and modern design, with a beautiful facade and comfortable spaces.',
  },
  {
    icon: '🏘',
    title: 'Affordable Homes',
    description: 'Everybody should be able to own an affordable home, which is the guiding philosophy on which we were created.',
  },
  {
    icon: '📍',
    title: 'Strategic Locations',
    description: 'Our projects are sited in urban areas of the country which further promote community development.',
  },
];

const COMMUNITY_VIDEO_ID = 'j-IsbySkcLg';

export default function CommunitySection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Expands from 70vw/60vh to 100vw/100vh
  const width = useTransform(scrollYProgress, [0, 1], [INITIAL_WIDTH, FINAL_WIDTH]);
  const height = useTransform(scrollYProgress, [0, 1], [INITIAL_HEIGHT, FINAL_HEIGHT]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [INITIAL_BORDER_RADIUS, FINAL_BORDER_RADIUS]);
  // Optional: move text up slightly as it expands
  const textY = useTransform(scrollYProgress, [0, 1], [INITIAL_TEXT_Y, FINAL_TEXT_Y]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <>
      <section id="community" className="relative w-full bg-cream border-t border-black/5">
        
        {/* Top: Feature Pillars */}
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {features.map((feat, idx) => (
              <div key={idx} className="flex flex-col space-y-4 group">
                {/* Icon Area */}
                <div className="text-4xl mb-2">{feat.icon}</div>
                <div className="w-8 h-px bg-black/20 mb-4"></div>
                 <h3 className="font-sans text-2xl md:text-3xl uppercase tracking-tighter font-medium">{feat.title}</h3>
                 <p className="font-sans text-xl md:text-2xl text-black/95 font-medium leading-relaxed tracking-tight">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Cinematic Video Section (Scroll Animated) */}
        <div ref={containerRef} className="relative w-full h-[200vh] bg-black">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            
            <motion.div 
              style={{ width, height, borderRadius }}
              className="relative overflow-hidden flex items-center justify-center bg-black"
            >
               {/* Background video thumbnail / muted autoplay */}
               <iframe
                 className="absolute inset-0 w-full h-full scale-[1.2] pointer-events-none"
                 src={`https://www.youtube.com/embed/${COMMUNITY_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${COMMUNITY_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`}
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 title="Community Background"
               />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]"></div>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

              {/* Centered Play + Text */}
              <motion.div 
                style={{ y: textY, opacity: textOpacity }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl"
              >
                {/* Play Button */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-20 h-20 rounded-full border-2 border-white/70 flex items-center justify-center mb-10 hover:border-white hover:bg-white/10 transition-all duration-500 backdrop-blur-sm group"
                  aria-label="Play Community Development Video"
                >
                  <Play className="w-7 h-7 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>

                <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase text-white leading-[0.9] mb-6 drop-shadow-2xl">
                  Community <br /> Development
                </h2>
                 <p className="font-sans text-xl md:text-2xl text-white font-medium tracking-tight leading-relaxed max-w-2xl mx-auto uppercase drop-shadow-xl">
                  EFAB Properties has also contributed to our community's socio-political and economic drive through turnkey operations in mass housing, which has allowed EFAB to deliver a diverse market share in important places.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
             <iframe
               className="w-full h-full"
               src={`https://www.youtube.com/embed/${COMMUNITY_VIDEO_ID}?autoplay=1&rel=0&origin=${window.location.origin}`}
               allow="autoplay; encrypted-media"
               allowFullScreen
               title="Community Development Video"
             />
          </div>
        </div>
      )}
    </>
  );
}
