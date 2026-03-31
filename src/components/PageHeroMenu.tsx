import { useState, type ReactNode } from 'react';
import { Link, type To } from 'react-router-dom';
import { Play, X } from 'lucide-react';
import YouTubeBackground from './YouTubeBackground';

export interface PageHeroMenuItem {
  label: string;
  to?: To;
  targetId?: string;
  current?: boolean;
}

interface PageHeroMenuProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  items?: PageHeroMenuItem[];
  align?: 'left' | 'center';
  mediaImage?: string;
  mediaAlt?: string;
  mediaVideoId?: string;
  mediaOverlayOpacity?: number;
  showPlayButton?: boolean;
  playVideoId?: string;
  playVideoTitle?: string;
}

function scrollToTarget(targetId: string) {
  const element = document.getElementById(targetId);

  if (!element) {
    return;
  }

  const offsetTop = element.getBoundingClientRect().top + window.scrollY - 136;

  window.scrollTo({
    top: Math.max(0, offsetTop),
    behavior: 'smooth',
  });
}

export default function PageHeroMenu({
  eyebrow,
  title,
  intro,
  items = [],
  align = 'center',
  mediaImage,
  mediaAlt = '',
  mediaVideoId,
  mediaOverlayOpacity = 0.35,
  showPlayButton = false,
  playVideoId,
  playVideoTitle = 'Hero Video',
}: PageHeroMenuProps) {
  const isCentered = align === 'center';
  const hasMedia = Boolean(mediaImage || mediaVideoId);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const activePlayVideoId = playVideoId ?? mediaVideoId;
  const eyebrowClass = hasMedia ? 'text-white/70' : 'text-black/44';
  const titleClass = hasMedia ? 'text-white' : 'text-black';
  const introClass = hasMedia ? 'text-white/88' : 'text-black/68';
  const crumbDividerClass = hasMedia ? 'text-white/30' : 'text-black/26';
  const crumbTextClass = hasMedia ? 'text-white/62 hover:text-white' : 'text-black/55 hover:text-black';
  const crumbCurrentClass = hasMedia ? 'text-white' : 'text-black';
  const borderClass = hasMedia ? 'border-white/20' : 'border-black/10';

  return (
    <>
      <section className={`relative overflow-hidden border-b border-black/10 ${hasMedia ? 'bg-black' : ''}`}>
        {mediaVideoId && (
          <YouTubeBackground
            videoId={mediaVideoId}
            overlayOpacity={0}
            className="pointer-events-none absolute inset-0"
          />
        )}

        {mediaImage && !mediaVideoId && (
          <div className="absolute inset-0">
            <img src={mediaImage} alt={mediaAlt} className="h-full w-full object-cover" />
          </div>
        )}

        {hasMedia && (
          <>
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: mediaOverlayOpacity }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_64%)] opacity-70" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </>
        )}

        <div className="container mx-auto relative z-10 flex min-h-[68svh] flex-col justify-center px-6 pb-20 pt-14 md:min-h-[74svh] md:pb-24 md:pt-16">
          {showPlayButton && activePlayVideoId && (
            <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center px-6">
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/70 bg-black/20 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white/10 md:h-24 md:w-24"
                aria-label={`Play ${playVideoTitle}`}
              >
                <Play className="ml-1 h-7 w-7 text-white md:h-8 md:w-8" />
              </button>
            </div>
          )}

          <div className={`${isCentered ? 'mx-auto max-w-[68rem] text-center' : 'max-w-[74rem]'}`}>
            <div className={`font-mono text-[11px] font-medium uppercase tracking-[0.36em] md:text-[12px] ${eyebrowClass}`}>
              {eyebrow}
            </div>

            <h1
              className={`mt-8 font-sans text-[clamp(3.35rem,8.6vw,7.6rem)] uppercase leading-[0.9] tracking-[-0.05em] ${
                isCentered ? 'mx-auto max-w-[11ch]' : 'max-w-[13ch]'
              } ${titleClass}`}
            >
              {title}
            </h1>

            <p
              className={`mt-8 font-sans text-lg font-medium leading-[1.35] tracking-[-0.015em] md:text-[1.7rem] ${
                isCentered ? 'mx-auto max-w-[32ch]' : 'max-w-[36ch]'
              } ${introClass}`}
            >
              {intro}
            </p>

            {items.length > 0 && (
              <div
                className={`mt-14 flex flex-wrap items-center gap-x-3 gap-y-3 border-t pt-6 ${borderClass} ${
                  isCentered ? 'justify-center' : ''
                }`}
              >
                {items.map((item, index) => (
                  <div key={`${item.label}-${index}`} className="flex items-center gap-3">
                    {index > 0 && (
                      <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${crumbDividerClass}`}>{'>'}</span>
                    )}

                    {item.targetId ? (
                      <button
                        type="button"
                        onClick={() => scrollToTarget(item.targetId!)}
                        className={`font-mono text-[10px] uppercase tracking-[0.28em] transition-opacity md:text-[11px] ${
                          item.current ? crumbCurrentClass : crumbTextClass
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : item.to ? (
                      <Link
                        to={item.to}
                        className={`font-mono text-[10px] uppercase tracking-[0.28em] transition-opacity md:text-[11px] ${
                          item.current ? crumbCurrentClass : crumbTextClass
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className={`font-mono text-[10px] uppercase tracking-[0.28em] md:text-[11px] ${crumbCurrentClass}`}>
                        {item.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {showPlayButton && activePlayVideoId && isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-all hover:bg-white hover:text-black"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${activePlayVideoId}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={playVideoTitle}
            />
          </div>
        </div>
      )}
    </>
  );
}
