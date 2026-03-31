import { AnimatePresence, motion } from 'framer-motion';
import EfabLogo from './EfabLogo';
import { useIntro } from '../context/IntroContext';

const CURTAIN_TRANSITION = {
  duration: 1.05,
  ease: [0.77, 0, 0.175, 1],
} as const;

export default function IntroLoader() {
  const { phase, hasReachedPhase } = useIntro();

  const showDot = phase === 'initial' || phase === 'dot';
  const showCenterMark = hasReachedPhase('unfold') && !hasReachedPhase('flight');
  const showWordmark = hasReachedPhase('reveal-text') && !hasReachedPhase('curtain');
  const revealHero = hasReachedPhase('curtain');
  const showFlyingMark = phase === 'flight';

  return (
    <motion.div
      initial={false}
      animate={{ opacity: phase === 'complete' ? 0 : 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="pointer-events-none fixed inset-0 z-[220]"
    >
      <motion.div
        initial={false}
        animate={{ y: revealHero ? '-104%' : '0%' }}
        transition={CURTAIN_TRANSITION}
        className="absolute inset-0 bg-cream"
      />

      <motion.div
        initial={false}
        animate={{
          opacity: phase === 'flight' || phase === 'complete' ? 0 : 1,
          y: phase === 'flight' ? -18 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="flex items-center gap-4 md:gap-6 lg:gap-7">
          {showDot && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: phase === 'dot' ? 1 : 0.78,
                opacity: 1,
                rotate: phase === 'dot' ? 8 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-2.5 w-2.5 rounded-full bg-[#052550] md:h-3 md:w-3"
            />
          )}

          {showCenterMark && (
            <motion.div
              initial={{ scale: 0.16, rotate: -14, opacity: 0 }}
              animate={{
                scale: phase === 'curtain' ? 0.96 : 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[110/143] h-20 md:h-28 lg:h-32"
            >
              <EfabLogo variant="mark" className="h-full" />
            </motion.div>
          )}

          {showWordmark && (
            <motion.div
              initial={{ opacity: 0, x: 18, filter: 'blur(10px)' }}
              animate={{
                opacity: phase === 'curtain' ? 0 : 1,
                x: 0,
                filter: phase === 'curtain' ? 'blur(6px)' : 'blur(0px)',
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 md:gap-5"
            >
              <EfabLogo variant="divider" alt="" className="hidden h-20 md:block md:h-24 lg:h-28" />
              <EfabLogo variant="wordmark" className="h-14 md:h-16 lg:h-20" />
            </motion.div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {showFlyingMark && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 0, scale: 1, opacity: 0 }}
              animate={{
                y: [0, 118, 268, 336, 336],
                scale: [1, 1, 0.95, 0.86, 0.86],
                opacity: [0, 1, 1, 0, 0],
              }}
              transition={{
                duration: 0.82,
                times: [0, 0.1, 0.58, 0.82, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-[110/143] h-16 md:h-20 lg:h-24"
            >
              <EfabLogo variant="mark" tone="light" className="h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
