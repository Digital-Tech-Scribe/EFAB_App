import { Outlet } from 'react-router-dom';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { ReactLenis } from '@studio-freight/react-lenis';
import TopBar from './TopBar';
import GlassNav from './GlassNav';
import Footer from './Footer';
import FluidBackground from './FluidBackground';
import IntroLoader from './IntroLoader';
import { IntroProvider, useIntro } from '../context/IntroContext';

function LayoutShell() {
  const { isComplete } = useIntro();

  return (
    <LayoutGroup>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <main className="relative bg-cream selection:bg-black selection:text-white min-h-screen">
          <FluidBackground />
          <TopBar />
          <GlassNav />
          <AnimatePresence>{!isComplete && <IntroLoader key="intro" />}</AnimatePresence>

          {/* ─── Main Content ─── */}
          {/* We use a large bottom margin to allow the footer to be revealed at the end */}
          <div className="relative z-10 w-full min-h-screen mb-[100vh] bg-cream">
            <Outlet />
          </div>

          {/* ─── Sticky Reveal Footer ─── */}
          {/* Placed in a fixed container AT THE BOTTOM with low z-index */}
          <div className="fixed bottom-0 left-0 right-0 z-0 w-full h-screen pointer-events-none">
            <div className="h-full w-full pointer-events-auto">
              <Footer />
            </div>
          </div>
        </main>
      </ReactLenis>
    </LayoutGroup>
  );
}

export default function Layout() {
  return (
    <IntroProvider>
      <LayoutShell />
    </IntroProvider>
  );
}
