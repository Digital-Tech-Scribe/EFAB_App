import { motion, useScroll, useTransform } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EfabLogo from './EfabLogo';
import { useIntro } from '../context/IntroContext';

export default function TopBar() {
  const { hasReachedPhase } = useIntro();
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const showHeader = hasReachedPhase('curtain');
  const headerOpacity = useTransform(scrollY, [0, 220, 540], [1, 0.74, 0.06]);
  const headerLift = useTransform(scrollY, [0, 540], [0, -18]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
  };

  const handleSearchClick = () => {
    window.dispatchEvent(new CustomEvent('efab:open-menu'));
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[80] px-5 pt-4 text-white md:px-8 md:pt-5">
      <motion.div
        initial={false}
        animate={{
          opacity: showHeader ? 1 : 0,
          y: showHeader ? 0 : -14,
          scale: showHeader ? 1 : 0.98,
        }}
        transition={{ duration: 0.48, delay: showHeader ? 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          style={{ opacity: headerOpacity, y: headerLift }}
          className="grid grid-cols-[1fr_auto_1fr] items-center"
        >
          <div className="flex justify-start">
            <button
              type="button"
              onClick={handleSearchClick}
              style={{ pointerEvents: showHeader ? 'auto' : 'none' }}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-white/92 transition-opacity hover:opacity-70"
              aria-label="Open navigation"
            >
              <Search className="h-[1.05rem] w-[1.05rem] stroke-[1.9]" />
            </button>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleLogoClick}
              className="rounded-full px-2 py-1.5 transition-opacity hover:opacity-75"
              style={{ pointerEvents: showHeader ? 'auto' : 'none' }}
              aria-label="Go to top"
            >
              <EfabLogo
                variant="lockup"
                tone="brand"
                className="h-[3rem] drop-shadow-[0_2px_10px_rgba(255,255,255,0.28)] md:h-[4rem]"
              />
            </button>
          </div>

          <div className="pointer-events-none flex justify-end pr-1">
            <Link
              to="/contact"
              style={{ pointerEvents: showHeader ? 'auto' : 'none' }}
              className="pointer-events-auto inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.38em] text-white/92 transition-opacity hover:opacity-70 md:text-[10px]"
            >
              <span className="text-[10px] md:text-xs">↳</span>
              CONTACT US
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
