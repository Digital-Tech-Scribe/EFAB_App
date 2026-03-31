import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import EfabLogo from './EfabLogo';
import { useIntro } from '../context/IntroContext';

const MENU_OPEN_EVENT = 'efab:open-menu';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.02,
    } as const,
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1,
    } as const,
  },
} as const;

const itemVariants = {
  hidden: {
    y: 15,
    opacity: 0,
    filter: 'blur(2px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 20,
    } as const,
  },
  exit: {
    y: -5,
    opacity: 0,
    filter: 'blur(1px)',
    transition: { duration: 0.1 } as const,
  },
} as const;

const toggleLineVariants = {
  hidden: {
    opacity: 0,
    x: 14,
  },
  visible: (order: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.32,
      delay: 0.2 + order * 0.07,
      ease: [0.22, 1, 0.36, 1],
    } as const,
  }),
} as const;

type DockStage = 'hidden' | 'icon' | 'capsule' | 'wide' | 'shift' | 'ready';

const DOCK_WIDTHS = {
  icon: 52,
  capsule: 88,
  wide: 266,
} as const;

const DOCK_ICON_SIZE = 52;
const DOCK_LEFT_PADDING = 10;
const DOCK_SHIFT_X = DOCK_LEFT_PADDING - DOCK_WIDTHS.wide / 2;

function resolveDockLabel(pathname: string) {
  if (pathname === '/') {
    return 'HOME';
  }

  if (pathname.startsWith('/projects/estates')) {
    return 'ESTATES';
  }

  if (pathname.startsWith('/projects/rentals')) {
    return 'RENTALS';
  }

  if (pathname.startsWith('/projects/commercials')) {
    return 'COMMERCIALS';
  }

  if (pathname.startsWith('/projects/luxury-homes')) {
    return 'LUXURY HOMES';
  }

  if (pathname.startsWith('/news/offers')) {
    return 'OFFERS';
  }

  if (pathname.startsWith('/media/videos')) {
    return 'VIDEOS';
  }

  if (pathname.startsWith('/about/team')) {
    return 'TEAM';
  }

  if (pathname.startsWith('/about/csr')) {
    return 'CSR';
  }

  if (pathname.startsWith('/about/faq')) {
    return 'FAQ';
  }

  if (pathname.startsWith('/about')) {
    return 'ABOUT US';
  }

  if (pathname.startsWith('/projects/')) {
    return 'PROJECT';
  }

  if (pathname.startsWith('/projects')) {
    return 'PROJECTS';
  }

  if (pathname.startsWith('/gallery')) {
    return 'GALLERY';
  }

  if (pathname.startsWith('/media')) {
    return 'MEDIA';
  }

  if (pathname.startsWith('/news')) {
    return 'NEWS';
  }

  if (pathname.startsWith('/contact')) {
    return 'CONTACT';
  }

  if (pathname.startsWith('/services')) {
    return 'SERVICES';
  }

  return 'MENU';
}

export default function GlassNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dockStage, setDockStage] = useState<DockStage>('hidden');
  const { phase, isComplete, hasReachedPhase } = useIntro();
  const navigate = useNavigate();
  const location = useLocation();
  const dockControls = useAnimationControls();
  const shellControls = useAnimationControls();
  const iconControls = useAnimationControls();
  const homeControls = useAnimationControls();
  const toggleControls = useAnimationControls();

  const showDock = hasReachedPhase('ui-cascade');
  const showDockDetails = dockStage === 'ready';
  const currentPageLabel = resolveDockLabel(location.pathname);

  useEffect(() => {
    if (!showDockDetails) {
      setIsOpen(false);
    }
  }, [showDockDetails]);

  useEffect(() => {
    if (!showDock) {
      setDockStage('hidden');
      setIsOpen(false);
      dockControls.set({ width: DOCK_WIDTHS.icon });
      shellControls.set({ opacity: 0 });
      iconControls.set({ x: -(DOCK_ICON_SIZE / 2), scale: 1 });
      homeControls.set({ opacity: 0, y: 14 });
      toggleControls.set({ opacity: 0, x: 20 });
      return;
    }

    if (phase !== 'ui-cascade') {
      setDockStage('ready');
      dockControls.set({ width: DOCK_WIDTHS.wide });
      shellControls.set({ opacity: 1 });
      iconControls.set({ x: DOCK_SHIFT_X, scale: 1 });
      homeControls.set({ opacity: 1, y: 0 });
      toggleControls.set({ opacity: 1, x: 0 });
      return;
    }

    let cancelled = false;

    const runSequence = async () => {
      setDockStage('icon');
      dockControls.set({ width: DOCK_WIDTHS.icon });
      shellControls.set({ opacity: 0 });
      iconControls.set({ x: -(DOCK_ICON_SIZE / 2), scale: 1 });
      homeControls.set({ opacity: 0, y: 14 });
      toggleControls.set({ opacity: 0, x: 20 });

      await Promise.all([
        dockControls.start({
          width: DOCK_WIDTHS.capsule,
          transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
        }),
        shellControls.start({
          opacity: 1,
          transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
        }),
      ]);

      if (cancelled) {
        return;
      }

      setDockStage('wide');
      await dockControls.start({
        width: DOCK_WIDTHS.wide,
        transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
      });

      if (cancelled) {
        return;
      }

      setDockStage('shift');
      await Promise.all([
        iconControls.start({
          x: DOCK_SHIFT_X,
          transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
        }),
        homeControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.32, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
        }),
        toggleControls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.32, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
        }),
      ]);

      if (!cancelled) {
        setDockStage('ready');
      }
    };

    void runSequence();

    return () => {
      cancelled = true;
      dockControls.stop();
      shellControls.stop();
      iconControls.stop();
      homeControls.stop();
      toggleControls.stop();
    };
  }, [
    dockControls,
    homeControls,
    iconControls,
    phase,
    shellControls,
    showDock,
    toggleControls,
  ]);

  useEffect(() => {
    const overflowValue = isOpen || !isComplete ? 'hidden' : '';

    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isComplete, isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const primaryLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Media', href: '/media' },
    { name: 'News', href: '/news' },
  ];

  useEffect(() => {
    const handleOpenMenu = () => {
      if (showDockDetails) {
        setIsOpen(true);
      }
    };

    window.addEventListener(MENU_OPEN_EVENT, handleOpenMenu);

    return () => window.removeEventListener(MENU_OPEN_EVENT, handleOpenMenu);
  }, [showDockDetails]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.setTimeout(() => {
      navigate(href);
    }, 220);
  };

  const handleHomeClick = () => {
    setIsOpen(false);

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
  };

  const handleCenterAction = () => {
    if (!showDockDetails) {
      return;
    }

    setIsOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[88] bg-black/10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDock && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{
                opacity: isOpen ? 0 : 1,
                y: isOpen ? 12 : 0,
                scale: isOpen ? 0.985 : 1,
              }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none fixed inset-x-0 bottom-10 z-[90] flex justify-center md:bottom-12"
            >
              <motion.div
                initial={false}
                animate={dockControls}
                className="pointer-events-auto relative flex h-[3.2rem] items-center overflow-hidden border border-black/32 bg-[linear-gradient(180deg,rgba(23,27,33,0.82),rgba(12,15,19,0.78))] shadow-[0_18px_44px_rgba(0,0,0,0.26)] backdrop-blur-[22px]"
                style={{ borderRadius: 0 }}
              >
                <motion.div
                  initial={false}
                  animate={shellControls}
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.018),rgba(255,255,255,0.004))]"
                  style={{ borderRadius: 0 }}
                />

                <div className="absolute left-1/2 top-1/2 z-20 -translate-y-1/2">
                  <motion.button
                    type="button"
                    initial={false}
                    animate={iconControls}
                    className="flex h-12 w-12 items-center justify-center bg-white/[0.04] transition-opacity hover:opacity-75"
                    onClick={handleHomeClick}
                    aria-label="Home"
                    style={{ borderRadius: 0 }}
                  >
                    <EfabLogo variant="mark" tone="light" className="h-[2.12rem]" />
                  </motion.button>
                </div>

                <div className="relative z-10 h-full w-full">
                  <motion.button
                    type="button"
                    onClick={handleCenterAction}
                    initial={false}
                    animate={homeControls}
                    style={{ pointerEvents: showDockDetails ? 'auto' : 'none' }}
                    className="absolute inset-y-0 left-[3.55rem] right-[3.35rem] flex items-center justify-center px-1 text-center transition-opacity hover:opacity-75"
                  >
                    <span className="select-none font-mono text-[8px] font-semibold uppercase tracking-[0.21em] text-white md:text-[9px]">
                      {currentPageLabel}
                    </span>
                  </motion.button>

                  <div className="absolute right-2 top-1/2 z-20 -translate-y-1/2">
                    <motion.button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setIsOpen(true);
                      }}
                      initial={false}
                      animate={toggleControls}
                      style={{ pointerEvents: showDockDetails ? 'auto' : 'none' }}
                      className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-75"
                      aria-label="Open menu"
                      aria-expanded={isOpen ? 'true' : 'false'}
                    >
                      <span className="flex flex-col items-end gap-[3px]">
                        <motion.span
                          custom={0}
                          variants={toggleLineVariants}
                          initial="hidden"
                          animate={showDockDetails ? 'visible' : 'hidden'}
                          className="block h-px w-[1.1rem] rounded-full bg-white"
                        />
                        <motion.span
                          custom={1}
                          variants={toggleLineVariants}
                          initial="hidden"
                          animate={showDockDetails ? 'visible' : 'hidden'}
                          className="block h-px w-[1.1rem] rounded-full bg-white"
                        />
                        <motion.span
                          custom={2}
                          variants={toggleLineVariants}
                          initial="hidden"
                          animate={showDockDetails ? 'visible' : 'hidden'}
                          className="block h-px w-[1.1rem] rounded-full bg-white"
                        />
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-x-0 bottom-10 z-[92] flex flex-col items-center px-4 md:bottom-12"
                >
                  <div className="pointer-events-auto flex w-full max-w-[27rem] flex-col items-center gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 14, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.985 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full overflow-hidden border border-black/28 bg-[linear-gradient(180deg,rgba(23,27,33,0.88),rgba(12,15,19,0.84))] px-8 py-7 shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur-[24px] md:px-9 md:py-8"
                      style={{ borderRadius: 22 }}
                      role="dialog"
                      aria-modal="true"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_58%)]" />

                      <motion.div
                        className="relative z-10 w-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <motion.div
                          variants={itemVariants}
                          className="mb-8 font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-white/42"
                        >
                          Menu
                        </motion.div>

                        <ul className="mb-10 flex w-full flex-col gap-1.5">
                          {primaryLinks.map((item) => (
                            <motion.li key={item.name} variants={itemVariants}>
                              <button
                                type="button"
                                onClick={() => handleNavClick(item.href)}
                                className="group flex w-full items-center text-left font-sans text-[2.8rem] leading-[0.94] tracking-[-0.045em] text-white transition-opacity hover:opacity-75 md:text-[3.1rem]"
                              >
                                {item.name}
                              </button>
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div
                          variants={itemVariants}
                          className="mb-10 grid grid-cols-2 gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.08em] text-white/42 md:text-xs"
                        >
                          <div className="space-y-1.5">
                            <div>News</div>
                            <div>Showroom</div>
                          </div>
                          <div className="space-y-1.5 text-white/52">
                            <div>+234 908 855 9026</div>
                            <div>info@efabproperties.com</div>
                          </div>
                        </motion.div>

                      </motion.div>
                    </motion.div>

                    <motion.button
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => setIsOpen(false)}
                      className="relative flex h-[2.9rem] w-[2.9rem] items-center justify-center overflow-hidden border border-black/28 bg-[linear-gradient(180deg,rgba(23,27,33,0.88),rgba(12,15,19,0.84))] text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-[22px] transition-opacity hover:opacity-80"
                      style={{ borderRadius: 4 }}
                      aria-label="Close menu"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.004))]" />
                      <X className="relative z-10 h-5 w-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
