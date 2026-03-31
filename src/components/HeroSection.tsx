import { motion, type Variants } from 'framer-motion';
import { useIntro } from '../context/IntroContext';

interface HeroSectionProps {
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.14,
      staggerChildren: 0.13,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const { hasReachedPhase } = useIntro();

  const revealBackground = hasReachedPhase('curtain');
  const revealContent = hasReachedPhase('hero-content');
  const settleDock = hasReachedPhase('ui-cascade');
  const settleScene = hasReachedPhase('complete');

  return (
    <section
      className={`sticky top-0 relative z-[10] flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#ddd8d1] ${className}`}
    >
      <motion.div
        initial={false}
        animate={{ opacity: revealBackground ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 bg-[#111215]"
      />

      <motion.div
        initial={false}
        animate={{
          opacity: revealBackground ? 1 : 0,
          scale: settleScene ? 1 : settleDock ? 1.015 : 1.05,
        }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <motion.video
          src={`${import.meta.env.BASE_URL}efab-hero-video.mp4`}
          autoPlay
          loop
          muted
          playsInline
          initial={false}
          animate={{ opacity: revealBackground ? 1 : 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover scale-[1.05]"
        />
        <motion.div
          initial={false}
          animate={{
            opacity: !revealBackground ? 1 : settleScene ? 0.42 : revealContent ? 0.48 : settleDock ? 0.58 : 0.72,
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-black"
        />
        <motion.div
          initial={false}
          animate={{ opacity: revealContent ? 0.16 : settleDock ? 0.11 : 0.06 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_64%)]"
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </motion.div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 pb-32 pt-20 md:px-10 md:pb-40 md:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={revealContent ? 'visible' : 'hidden'}
          className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-center gap-4 text-center md:gap-5"
        >
          <motion.div variants={itemVariants}>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.36em] text-white/88 drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)] md:text-[12px]">
              Solving housing needs, since 1997
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="inline-block max-w-[11ch] transform-gpu font-sans text-[clamp(3.35rem,10.5vw,8.6rem)] uppercase leading-[0.9] tracking-[-0.045em] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.28)]">
              Real Estate <br className="hidden md:block" />
              Innovators
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="max-w-[32ch] font-sans text-lg font-medium uppercase tracking-[-0.015em] text-white/92 drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)] md:text-[1.85rem]">
              Providing homes with dignity
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="#landmarks"
              className="inline-flex items-center border border-white/75 px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-white transition-all hover:scale-[1.03] hover:bg-white hover:text-black md:px-10 md:py-5 md:text-xs"
            >
              All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
