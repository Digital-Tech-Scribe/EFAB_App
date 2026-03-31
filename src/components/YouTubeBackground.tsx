import { cn } from './utils';

interface YouTubeBackgroundProps {
  videoId: string;
  overlayOpacity?: number;
  className?: string;
}

export default function YouTubeBackground({ videoId, overlayOpacity = 0.6, className }: YouTubeBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Container to handle aspect ratio and black bars */}
      <div className="absolute inset-0 w-full h-full scale-[1.3] md:scale-110">
        <iframe
          className="w-full h-full aspect-video opacity-100"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Background Video"
        />
      </div>
      
      {/* Dark Overlay for text legibility */}
      <div 
        className={cn(
          "absolute inset-0 bg-black mix-blend-multiply transition-opacity duration-1000",
          {
            "opacity-40": overlayOpacity === 0.4,
            "opacity-50": overlayOpacity === 0.5,
            "opacity-60": overlayOpacity === 0.6,
            "opacity-70": overlayOpacity === 0.7,
            "opacity-80": overlayOpacity === 0.8,
            "opacity-90": overlayOpacity === 0.9,
            "opacity-100": overlayOpacity === 1,
            "opacity-0": overlayOpacity === 0,
          }
        )}
      ></div>
      
      {/* Fluid Grain/Noise overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
