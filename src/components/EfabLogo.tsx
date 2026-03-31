import type { CSSProperties } from 'react';
import { cn } from './utils';

export type EfabLogoVariant = 'lockup' | 'mark' | 'divider' | 'wordmark';
export type EfabLogoTone = 'brand' | 'light' | 'dark';

interface EfabLogoProps {
  variant?: EfabLogoVariant;
  tone?: EfabLogoTone;
  alt?: string;
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
}

const SOURCE_WIDTH = 400;
const SOURCE_HEIGHT = 143;

const SEGMENTS: Record<EfabLogoVariant, { start: number; width: number }> = {
  mark: { start: 23, width: 110 },
  divider: { start: 151, width: 5 },
  wordmark: { start: 178, width: 211 },
  lockup: { start: 23, width: 366 },
};

const MONO_TONES: Record<Exclude<EfabLogoTone, 'brand'>, string> = {
  light: '#ffffff',
  dark: '#111111',
};

export default function EfabLogo({
  variant = 'lockup',
  tone = 'brand',
  alt = 'EFAB Properties',
  className,
  imageClassName,
  style,
}: EfabLogoProps) {
  const segment = SEGMENTS[variant];
  const isDecorative = variant === 'divider' || alt.length === 0;
  const assetUrl = `${import.meta.env.BASE_URL}logo.svg`;
  const segmentStyle = {
    width: `${(SOURCE_WIDTH / segment.width) * 100}%`,
    transform: `translateX(-${(segment.start / SOURCE_WIDTH) * 100}%)`,
    willChange: 'transform',
  } satisfies CSSProperties;
  const isMonochrome = tone !== 'brand';

  return (
    <span
      role={isMonochrome && !isDecorative ? 'img' : undefined}
      aria-label={isMonochrome && !isDecorative ? alt : undefined}
      aria-hidden={isDecorative ? 'true' : undefined}
      className={cn('relative inline-flex shrink-0 overflow-hidden align-middle', className)}
      style={{
        aspectRatio: `${segment.width} / ${SOURCE_HEIGHT}`,
        ...style,
      }}
    >
      {isMonochrome ? (
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute left-0 top-0 h-full max-w-none select-none',
            imageClassName
          )}
          style={{
            ...segmentStyle,
            backgroundColor: MONO_TONES[tone],
            WebkitMaskImage: `url("${assetUrl}")`,
            maskImage: `url("${assetUrl}")`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskPosition: '0 0',
            maskPosition: '0 0',
          }}
        />
      ) : (
        <img
          src={assetUrl}
          alt={isDecorative ? '' : alt}
          draggable={false}
          className={cn(
            'pointer-events-none absolute left-0 top-0 h-full max-w-none select-none',
            imageClassName
          )}
          style={segmentStyle}
        />
      )}
    </span>
  );
}
